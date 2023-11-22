'use client';
import { Button } from '@/components/ui/button';
import { Container, Flex, Heading, Text, Card, Badge } from '@radix-ui/themes';

type Props = {
  name: string;
};

export const CustomHeader = ({ name }: Props) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Container size={'1'}>
        <Flex direction={'column'} pb={'4'}>
          <Heading>Coding Issue Tracker</Heading>
          <Text color='gray'>Here you can find the issue relevant to your certain project. </Text>
        </Flex>

        <Flex gap={'4'} direction={'column'}>
          <Card>
            <Flex gap={'1'} direction={'column'}>
              <Text>Issue #24 - Button is Wrong Color</Text>
              <Flex gap={'2'}>
                <Badge color='orange'>Devops</Badge>
                <Badge color='blue'>UI</Badge>
              </Flex>
              <Text>
                This is a very serious issue. On a dashboard that only 5 users use, there is a
                button that is a wrong shade of green. This is mission critical.
              </Text>
            </Flex>
            <Button>hello world</Button>
          </Card>
        </Flex>
      </Container>
    </main>
  );
};
