import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';

const mockdata = [
  {
    nombre: 'imc',
    title: 'Calcula tu indice de masa moscular',
    image:
      'https://masvidasinobesidad.com/wp-content/uploads/2018/02/IMC.png',
    date: '',
  
  },
  {
    nombre: 'calculo',
    title: 'Genera una tabla de micronutrientes ',
    image:
      'https://pbs.twimg.com/media/D_PKd7XVAAIYe96.jpg',
    date: '',
  },
  {
    nombre: 'busqueda',
    title: 'Busca alimentos y sus propiedades',
    image:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/89E2/production/_106589253_amino.jpg',
    date: '',
  },
 
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const  Home = () => {
  const { classes } = useStyles();
  const router = useRouter()

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" onClick={() => router.push('/'+article.nombre)} className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Layout>
      <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </Layout>
  );
}
export default Home