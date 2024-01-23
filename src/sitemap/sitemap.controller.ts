import { ConfigService } from '@nestjs/config'
import { Controller, Get, Header } from '@nestjs/common'
import { Builder } from 'xml2js'
import { addDays, format } from 'date-fns'

import { CATEGORY_URL } from './sitemap.constants'
import { TopPageService } from '../top-page/top-page.service'

@Controller('sitemap')
export class SitemapController {
  domain: string

  constructor(
    private readonly topPageService: TopPageService,
    private readonly configService: ConfigService,
  ) {
    this.domain = configService.get('DOMAIN') ?? ''
  }

  @Get('xml')
  @Header('content-type', 'text/xml')
  async sitemap() {
    const formatString = 'yyyy-MM-dd"t"HH:mm:00.000xxx'
    let res = [
      {
        loc: this.domain,
        lastmod: format(addDays(new Date(), -1), formatString),
        changefreq: 'daily',
        priority: '1.0',
      },
      {
        loc: `${this.domain}/courses`,
        lastmod: format(addDays(new Date(), -1), formatString),
        changefreq: 'daily',
        priority: '1.0',
      },
    ]
    const pages = await this.topPageService.findAll()
    res = res.concat(
      pages.map((page) => ({
        loc: `${this.domain}/${CATEGORY_URL[page.firstCategory]}/${page.alias}`,
        lastmod: format(new Date(page.updatedAt ?? new Date()), formatString),
        changefreq: 'weekly',
        priority: '0.7',
      })),
    )
    const builder = new Builder({
      xmldec: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    })
    return builder.buildObject({
      urlset: {
        $: {
          xmlns: 'http://www.sitemap.org/schemas/sitemap/0.9',
        },
        url: res,
      },
    })
  }
}