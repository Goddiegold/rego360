import { scrollContainerToView } from "@/utils";
import { Container, Flex, Text, Title, Button, Space } from "@mantine/core";



const HeroSection = () => {
    return (
        <>
            <Flex
                id="hero"
                h={"100%"}
                w={"100%"}
                className='bg-cover bg-no-repeat bg-center overflow-hidden md:min-h-[600px] min-h-[700px]'
                style={{
                    // transform: "skewY(-2deg)",
                    transformOrigin: 0,
                    backgroundImage: "url('/images/banner-1.jpg')",
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a dark overlay to improve text contrast
                }}
            >
                <Container size="lg" className="flex flex-col">
                    <Flex my={"auto"} direction={"column"} className="w-full lg:w-[50%]">
                        <Flex direction={"column"} mt={"xl"}>
                            <Title
                                fw={600}
                                className="!font-inter text-white text-[2.5rem] md:!text-[3.5rem]"
                                style={{
                                    lineHeight: 1.2
                                }}
                            >
                                Finding your
                                <Text c={"black"} fw={700} fz={"2.5rem"}>Dream Home/Property</Text>
                            </Title>
                            <Text
                                mt={"xl"}
                                fw={400}
                                c={"white"}
                                size={"md"}
                                className="text-white text-[1rem] md:text-sm"
                            >
                                Our platform is designed to make property sales effortless and reliable, connecting buyers and sellers with ease. We focus on providing a seamless experience by streamlining the sales process, ensuring transparency, and building trust at every step.
                            </Text>
                            {/* learn more and get started */}
                            {/* <GetStartedAndLearnMore /> */}
                            <Flex align={"center"} mt={"xl"} className="flex-col sm:flex-row">
                                <Button
                                    fz={"sm"}
                                    c={"dark"}
                                    bg={"white"}
                                    onClick={() => scrollContainerToView("projects")}
                                    // rightSection={<CaretRight size={20} />}
                                    size="md"
                                    radius={12}
                                >
                                    Learn More
                                </Button>
                                <Space mx={"sm"} />
                                <Button
                                    onClick={() => scrollContainerToView("investments")}
                                    className="mt-3 sm:mt-0 bg-black hover:bg-black"
                                    // rightSection={<ArrowRight size={20} />}
                                    size="md"
                                    fz={"sm"}
                                    radius={12}
                                // radius={"md"}
                                >
                                    Get Started
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>

                </Container>
            </Flex>
        </>
    );
}



export default HeroSection;