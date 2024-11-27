import { scrollContainerToView, support } from '@/utils';
import {
    ActionIcon,
    Burger,
    Button,
    Container,
    Divider,
    Drawer,
    Flex,
    Group,
    rem, ScrollArea,
    Text, Image
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import Image from 'next/image';
// import Link from 'next/link';
import { Link } from "react-router-dom"
import Logo from '../Logo';
import classes from './styles.module.css';
import React, { useEffect, useState } from "react";

const links = [
    { link: 'home', label: 'Home', id: "hero" },
    // { link: 'https://app.simpletest.ai/login', label: 'About' },
    { link: 'features', label: 'Features', id: "features" },
    { link: '/support', label: 'Benefits', id: "benefits" },
    { link: '/support', label: 'Contact Us', id: "footer" },
];

export default function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const isScrolling = scrollPosition > 50;

    const items = links.map((link) => (
        <Link
            style={{
                marginBottom: opened ? "20px" : ""
            }}
            key={link.label}
            href={"#"}
            // target='_blank'
            className={classes.link}
            onClick={(event) => {
                event.preventDefault()
                // scrollContainerToView(link.id)
                if (opened) {
                    toggle()
                }
            }}
        >
            {link.label}
        </Link>
    ));

    useEffect(() => {
        // scrollContainerToView(active)
        // Check scroll position on component mount and update state accordingly
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        // Run the scroll handler initially to catch the correct scroll position on mount
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header
                style={{
                    backgroundColor: isScrolling ? 'white' : 'transparent',
                }}
                className={classes.header}>
                <Container size={"lg"}
                    className={classes.inner} w={"100%"}
                // px={"xl"}
                >
                    <Group>
                        <Logo />
                    </Group>

                    <Group gap={5} className={classes.links} visibleFrom="md">
                        {items}
                    </Group>

                    <Flex
                        visibleFrom="md"
                        // className="hidden lg:flex"
                        align={"center"}
                        justify={"space-between"}>
                        <Button
                            pr={0}
                            fullWidth
                            mih={60}
                            variant='transparent'
                            leftSection={<div>
                                <Image src={"/icons/phone.svg"} width={20} height={20} alt='phone-icon' />
                            </div>}>
                            {/* <Flex direction={'row'} align={'center'} className='border'> */}
                            <Flex direction={"column"} justify={"flex-start"}
                            >
                                <Text fz={10} fw={600} c={"dimmed"} ta={"start"}>Customer Care</Text>
                                <Text fw={600} c={"dark"} fz={15} component='a' href={`tel: +2347052152823`}>{support.phone}</Text>
                                {/* </Flex> */}
                            </Flex>
                        </Button>

                        <Divider orientation='vertical' mx={"lg"} h={30} my={"auto"} />

                        <ActionIcon variant='transparent'>
                            <div>
                                <Image src={"/icons/search.svg"} width={20} height={20} alt='search-icon' />
                            </div>
                        </ActionIcon>
                    </Flex>

                    <Flex hiddenFrom="md">
                        <ActionIcon variant='transparent' >
                            <div>
                                <Image src={"/icons/search.svg"} width={20} height={20} alt='search-icon' />
                            </div>
                        </ActionIcon>
                        <Burger opened={opened} onClick={toggle} size="sm" color='dimmed' />

                    </Flex>
                </Container>
            </header >

            <Drawer
                opened={opened}
                onClose={toggle}
                size="100%"
                padding="md"
                title={<Logo />}
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
                    <Flex maw={400} direction={"column"} px={"sm"}>
                        {items}
                    </Flex>
                    <Divider my="sm" />


                </ScrollArea>
            </Drawer>
        </>
    );
}