// import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Image,
  Space,
  Text,
  useMantineTheme
} from '@mantine/core';
import classes from './styles.module.css';

export default function PropertyCard() {
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image src="/images/house.jpg" h={180} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient"
        my={"sm"}
        gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
      </Badge>

      <Space my={"xs"} />
      <Text className={classes.title}
        fw={500} component="a" {...linkProps}>
        London Estate, Warsaw
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4} mb={"sm"}>
        This elegant 4-bedroom, 3-bathroom home boasts an open-plan living area, a modern kitchen, a landscaped backyard, and a two-car garage.
        Conveniently located near top schools, shops, and parks, it's perfect for family living and entertaining
      </Text>


    </Card>
  );
}