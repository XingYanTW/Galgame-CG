import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
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