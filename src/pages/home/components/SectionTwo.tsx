import PropertyCard from "@/components/card";
import {
    Container,
    Flex,
    Grid,
    Text
} from "@mantine/core";





const SectionTwo = () => {
    return (
        <Flex
            id="about"
            mih={500}
            justify={"center"}
            direction={"column"} className="overflow:hidden ">
            <Container size="lg">
                <Text
                    ta={"center"}
                    // mb={"lg"}
                    mt={"lg"}
                    c={"dark"}
                    fw={600}
                    size="2rem">
                    Our Properties</Text>
                <Grid mt={"xl"}>
                    {Array(3).fill(null).map(_ => (
                        <Grid.Col span={{ md: 6, lg: 4 }}>
                            <PropertyCard />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Flex>
    );
}

export default SectionTwo;