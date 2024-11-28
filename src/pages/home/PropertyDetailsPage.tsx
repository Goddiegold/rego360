import Header from "@/components/header";
import { Flex, Container, Text, Image } from "@mantine/core";



const PropertyDetailsPage = () => {
    return (
        <>
            <Header />
            <Flex
                id="about"
                mih={500}
                justify={"center"}
                direction={"column"} className="overflow:hidden ">
                <Container size="lg" className="flex flex-col">
                    <Text
                        ta={"center"}
                        mb={"xl"}
                        // mt={"lg"}
                        c={"dark"}
                        fw={600}
                        size="2rem">
                        London Estate, Warsaw</Text>


                    <Flex mt={"xl"}>
                        <Image
                            w={"50%"}
                            src={"/images/house.jpg"} />

                    </Flex>
                </Container>
            </Flex>


        </>
    );
}

export default PropertyDetailsPage;