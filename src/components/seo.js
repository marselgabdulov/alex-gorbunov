import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, siteUrl }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: data.site.siteMetadata.siteUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:site_name`,
                content: `alexeygorbunov.com`,
              },
              {
                property: `og:image`,
                content: data.ogImage.childImageSharp.fluid.src,
              },
              {
                name: `google-site-verification`,
                content: `W1DHviHCKUqNTXxUV-X_Fhw-xudkXQkPbRHeH4JDh6c`,
              },
              {
                name: `yandex-verification`,
                content: `0108a35d04b01738`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: data.ogImage.childImageSharp.fluid.src,
              },
              {
                name: `twitter:site`,
                content: "alexeygorbunov.com",
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `ru`,
  meta: [],
  keywords: [],
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    ogImage: file(relativePath: { eq: "og.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
