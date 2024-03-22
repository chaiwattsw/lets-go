'use client';

import { Carousel } from '@mantine/carousel';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Image,
  Skeleton,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import axios from 'axios';
import Autoplay from 'embla-carousel-autoplay';

import Link from 'next/link';
import { useRef } from 'react';
import { useQuery } from 'react-query';

const getCelebsNews = async () => {
  const response = await axios.get('/api/celebs-news');
  return response?.data.news ?? [];
};

const getTop10Locations = async () => {
  const response = await axios.get('/api/top10-locations');
  return response?.data.locations ?? [];
};

const kcelebrities = [
  {
    name: 'Kim Seon Ho',
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1p7xMHRNsrUJacXqOFs1EZqSIvp.jpg',
  },
  {
    name: 'Jackson Wang',
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yPhD9nXzmOVA4IUyVsqv7ZzvTKX.jpg',
  },
  {
    name: 'Song Jung-gi',
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kgjb5OppOVTh5tz3hhnfDVnTvDv.jpg',
  },
  {
    name: 'Kwan Na Ra',
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4U0cNinwOf7DdsBYA3BFi7arDmz.jpg',
  },
  {
    name: 'Kim Jinyoung',
    image:
      'https://s359.kapook.com/r/600/auto/pagebuilder/a6250c2e-d0a4-4db1-a4e2-35354e4a586d.jpg',
  },
  {
    name: 'Bak Ji-hyo',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Park_Jihyo_for_Pearly_Gates_Korea_02.jpg/480px-Park_Jihyo_for_Pearly_Gates_Korea_02.jpg',
  },
  {
    name: 'มินนี่',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/%28G%29I-DLE%27s_Minnie_on_June_2023.jpg/440px-%28G%29I-DLE%27s_Minnie_on_June_2023.jpg',
  },
  {
    name: 'Song-Ji-hun',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/140120_%ED%94%BC_%EB%81%93%EB%8A%94_%EC%B2%AD%EC%B6%98_vip%EC%8B%9C%EC%82%AC%ED%9A%8C-%EB%B9%84.jpg/440px-140120_%ED%94%BC_%EB%81%93%EB%8A%94_%EC%B2%AD%EC%B6%98_vip%EC%8B%9C%EC%82%AC%ED%9A%8C-%EB%B9%84.jpg',
  },
  {
    name: 'Baekho',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/180509_%EB%B0%B1%ED%98%B8_01.jpg/440px-180509_%EB%B0%B1%ED%98%B8_01.jpg',
  },
];

// Thai Celebrities visited places in Thailand
const thaiCelebs = [
  {
    name: 'Jumpol Adulkittiporn',
    image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/alCgpzXB50QWfck3KFlfzkRnXSW.jpg',
  },
  {
    name: 'Atthaphan Phunsawat',
    image: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/uJ1THfL7y8tuWpCNpow6eoPIr27.jpg',
  },
  {
    name: 'Tawan Vihokratana',
    image: 'https://i.mydramalist.com/kp1zd_5c.jpg',
  },
  {
    name: 'Thitipoom Techaapaikhun',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gun_Atthaphan.jpg/440px-Gun_Atthaphan.jpg',
  },
];

const mockCelebrities = [
  {
    name: 'เนเน่ พรนับพัน',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Nene%E9%83%91%E4%B9%83%E9%A6%A8.jpg/440px-Nene%E9%83%91%E4%B9%83%E9%A6%A8.jpg',
  },
  {
    name: 'ซันนี่ เกวลิน หรือ ซันนี่ หยาง',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sunnee_as_Thai_Festival_Ambassador.jpg/440px-Sunnee_as_Thai_Festival_Ambassador.jpg',
  },
  {
    name: 'มีมี่ พร้อมวิไล หรือ มีมี่ ลี',
    image: 'https://f.ptcdn.info/829/077/000/rew3y51lnk6uWXZKxfDlK-o.jpg',
  },
  {
    name: 'นาย กรชิต หรือ นาย INTO1',
    image: 'https://mpics.mgronline.com/pics/Images/565000010259901.JPEG',
  },
  {
    name: 'แพทริค ณัฐวรรธ์ หรือ แพทริค INTO',
    image: 'https://s359.kapook.com/pagebuilder/91cfa2ce-7761-4df4-b198-fc05f2ad347e.jpg',
  },
  {
    name: 'หยางหยาง',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Yang_profile_pic.jpg/440px-Yang_profile_pic.jpg',
  },
  {
    name: 'กงจวิ้น',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/GJ_Cannes2.jpg/440px-GJ_Cannes2.jpg',
  },
  {
    name: 'Ju Jingyi',
    image:
      'https://sudsapda.com/app/uploads/2020/11/006VxdWHgy1gjxdf3by06j32yo1z4x6p-scaled-e1605325397374.jpg',
  },
  {
    name: 'Cheng Xiao',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/180317_%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80_%EB%AF%B8%EB%8B%88%ED%8C%AC%EB%AF%B8%ED%8C%85_%EC%A7%81%EC%B0%8D_%2819%29.jpg/440px-180317_%EC%9A%B0%EC%A3%BC%EC%86%8C%EB%85%80_%EB%AF%B8%EB%8B%88%ED%8C%AC%EB%AF%B8%ED%8C%85_%EC%A7%81%EC%B0%8D_%2819%29.jpg',
  },
  { name: 'หลี่ข่ายซิน', image: 'https://entertain.teenee.com/chinese_star/img8/670257.jpg' },
];

export const CelebsNewsCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { data: celebsNews } = useQuery('getCelebsNews', getCelebsNews);

  return (
    <Carousel
      align="center"
      withIndicators
      loop
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      plugins={[autoplay.current]}
    >
      {celebsNews?.map((news) => (
        <Carousel.Slide key={news.name} w="100%">
          <Card w="100%" h={300} style={{ position: 'relative' }}>
            <Stack dir="column" align="center" justify="center">
              <Image src={news.image} w="100%" h="100%" />
            </Stack>
            <Title
              order={3}
              c="white"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 16,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              {news.title}
            </Title>
          </Card>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

const SuperstarCheckInThailand = () => {
  const getRandomCelebImage = (region) => {
    let celebrities = [];

    switch (region) {
      case 'kr':
        celebrities = kcelebrities;
        break;
      case 'cn':
        celebrities = mockCelebrities;
        break;
      case 'th':
        celebrities = thaiCelebs;
        break;
      default:
        celebrities = [...kcelebrities, ...mockCelebrities, ...thaiCelebs];
    }

    const randomIndex = Math.floor(Math.random() * celebrities.length);
    return celebrities[randomIndex].image;
  };

  return (
    <section>
      <Grid justify="center" align="center" gutter="xl" p="lg">
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} p="md">
          <Stack justify="center" align="center">
            <Box href="near-me" component={Link}>
              <Image src="https://picsum.photos/400/400" alt="Celeb Near Me" height={400} />
            </Box>
            <Button size="lg" component={Link} href="/kr" variant="filled">
              Superstar nearby me
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} p="md">
          <Stack justify="center" align="center">
            <Box href="kr" component={Link}>
              <Image src={getRandomCelebImage('kr')} alt="Korean Celebrity" height={400} />
            </Box>
            <Button size="lg" component={Link} href="/kr" variant="filled">
              South Korea
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} p="md">
          <Stack justify="center" align="center">
            <Box href="cn" component={Link}>
              <Image src={getRandomCelebImage('cn')} alt="Chinese Celebrity" height={400} />
            </Box>
            <Button size="lg" component={Link} href="/cn" variant="filled">
              China
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} p="md">
          <Stack justify="center" align="center">
            <Box href="th" component={Link}>
              <Image src={getRandomCelebImage('th')} alt="Thai Celebrity" height={400} />
            </Box>
            <Button size="lg" component={Link} href="/th" variant="filled">
              Thailand
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </section>
  );
};

const Top10Locations = () => {
  const { data: top10Locations, isLoading } = useQuery('getTop10Locations', getTop10Locations);

  if (isLoading) {
    return (
      <section>
        <Grid columns={12} align="stretch">
          {[...Array(10)].map((_, index) => (
            <Grid.Col key={index} span={{ xs: 12, sm: 6, md: 12 / 5 }}>
              <Card shadow="sm" radius="lg" p="xl">
                <Skeleton height={200} width="100%" />
                <Skeleton height={20} width="70%" mt="md" />
                <Skeleton height={20} width="50%" mt="sm" />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </section>
    );
  }

  return (
    <section>
      <Grid columns={12} align="stretch">
        {top10Locations?.map((location, index) => (
          <Grid.Col key={location.title} span={{ xs: 12, sm: 6, md: 12 / 5 }}>
            <Card
              shadow="sm"
              radius="lg"
              p="xl"
              style={{ position: 'relative' }}
              component={Link}
              href={`/locations/${location.title}`}
            >
              <Image src={location?.image} alt={location.title} />
              <Title
                order={3}
                c="white"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                อันดับ {index + 1}
              </Title>
              <Text size="md" c="black" lineClamp={3}>
                {location.title}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
};

export default function Page() {
  return (
    <Container size="xl">
      <Stack gap="xl">
        <CelebsNewsCarousel />
        <Title order={1} ta="start" c="white">
          Superstar Check in Thailand
        </Title>
        <SuperstarCheckInThailand />
        <Divider />
        <Box>
          <Title order={1} ta="left" c="white">
            Top 10 tourist destinations
          </Title>
        </Box>
        <Divider />
        <Top10Locations />
      </Stack>
    </Container>
  );
}
