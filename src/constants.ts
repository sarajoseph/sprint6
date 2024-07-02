export type ProductsProps = {
  id: string
  name: string
  description: string
  price: number
  selected: boolean
  pages?: number
  languages?: number
}[]
export const products: ProductsProps = [
  {
    'id': 'product01',
    'name': 'Seo',
    'description': 'Programació d\'una web responsive completa',
    'price': 300,
    'selected': false
  },
  {
    'id': 'product02',
    'name': 'Ads',
    'description': 'Programació d\'una web responsive completa',
    'price': 400,
    'selected': false
  },
  {
    'id': 'product03',
    'name': 'Web',
    'description': 'Programació d\'una web responsive completa',
    'price': 500,
    'selected': false,
    'pages': 1,
    'languages': 1
  },
]
export const WEB_PRODUCT_ID: string = 'product03'