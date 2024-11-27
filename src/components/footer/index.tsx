"use client";
import { Text, Container, ActionIcon, Group, rem, Stack, Flex, ThemeIcon, Image } from '@mantine/core';
import Logo from '../Logo';
import classes from './styles.module.css';
// import Image from 'next/image';
import { scrollContainerToView, support } from '@/utils';

const data = [
    {
        title: 'Links',
        links: [
            { label: 'Home', link: '#', id: "hero" },
            { label: 'Benefits', link: '#', id: "benefits" },
            { label: 'Features', link: '#', id: "features" },
            { label: "Accomplishments", link: "#", id: "accomplishments" }
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Testimonials', link: '#', id: "testimonials" },
            { label: 'Pricing Plan', link: '#', id: "#" },
        ],
    },
];

const contactus = [
    { icon: "map", label: support.address },
    { icon: "phone", label: support.phone, type: "tel:" },
    { icon: "mail", label: support.mail, type: "mailto:" },
]

const groups = data.map((group) => {
    const links = group.links.map((item, index) => (
        <Text<'a'>
            key={index}
            className={classes.link}
            component="a"
            href={item.link}
            onClick={(event) => {
                event.preventDefault()
                if (item.id) {
                    scrollContainerToView(item.id)
                }
            }}
            size='sm'
            mt={10}
            c={"dimmed"}
        >
            {item.label}
        </Text>
    ));

    return (
        <div
            className={classes.wrapper}
            key={group.title}>
            <Text
                fw={600}
                className={classes.title}
            >{group.title}</Text>
            {links}
        </div>
    );
});

const social = [
    "linkdeln",
    "twitter",
    "youtube"
]
export default function Footer() {

    return (
        <footer
            id='footer'
            // className=''
            className={`${classes.footer} mt-5`}
        >
            <Container
                size={"lg"}
                className={`${classes.inner} !justify-between`}
            >
                <Stack maw={200} gap={5} justify='flex-start' my={"sm"}>
                    <Flex justify={"flex-start"}>
                        <Logo />
                    </Flex>
                    <Text size="xs" c="dimmed"
                    >
                        Offering a trusted platform for seamless property sales.
                    </Text>
                </Stack>

                <div
                    className={`${classes.groups}`}
                >{groups}
                    <Stack maw={200} gap={5}>
                        <Text
                            c={"dark"}
                            fw={600}
                            className={classes.title}
                        >Contact Us</Text>
                        <Stack gap={"xs"}>
                            {contactus.map((item, key) => {
                                // const href = 
                                return (
                                    <Flex key={key} align={"center"} gap={"sm"}>
                                        <Image src={`/icons/${item.icon}.svg`}
                                            alt={item.label} w={20} h={20} />
                                        <Text
                                            component='a'
                                            href={item.type && (`${item?.type}${item.label}`)}
                                            size='sm'
                                            c={"dimmed"}
                                        >
                                            {item.label}
                                        </Text>
                                    </Flex>
                                )
                            })}

                        </Stack>
                    </Stack>

                </div>
            </Container>
            <Container
                size={"lg"}
                className={classes.afterFooter}
            >
                <Text c="dimmed" size="sm">
                    © {new Date().getFullYear()} Rego360. All rights reserved.
                </Text>

                <Group gap={0}
                    className={classes.social}
                    justify="flex-end" wrap="nowrap">
                    {social.map((item, key) => (
                        <ActionIcon
                            radius={"xl"}
                            key={key}
                            size="xl" color="gray" variant="subtle">
                            <Image src={`/icons/${item}.svg`}
                                alt={`simple test ${item}`} w={20} h={20} />
                        </ActionIcon>
                    ))}
                </Group>
            </Container>
        </footer>
    );
}