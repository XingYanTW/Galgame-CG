import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/api/random-image',
      permanent: false,
    },
  }
}

export default function Index() {
  return null
}