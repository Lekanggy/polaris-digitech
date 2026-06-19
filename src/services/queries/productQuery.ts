export const productQuery = `
  query Product($documentId: ID!) {
    product(documentId: $documentId) {
      documentId
      title
      slug
      features {
        text
      }
      shortDescription
      bg
      bgBox
      boxPosition
      overlayImage {
        url
        name
      }
      route
      cardImage {
        url
        name
      }
      intro {
        leftImage {
          name
          url
        }
        title
        description
      }
      quote {
        image {
          name
          url
        }
        quote
      }
      Pricing {
        id
        title
        description
        plans {
          id
          name
          price
          period
          highlighted
          features {
            text
          }
        }
      }
      KeyFeatures {
        sectionTitle
        sectionDescription
        features {
          description
          title
          id
        }
      }
      showcase {
        image {
          url
          name
          documentId
        }
      }
    }
  }
`;