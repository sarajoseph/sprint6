export type ProductsProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  selected: boolean;
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
    'selected': false
  },
]