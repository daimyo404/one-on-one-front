import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

type Users = {
  name: string;
  token: string;
};

export default function CutomTable(): JSX.Element {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const options: AxiosRequestConfig = {
        url: "api/users",
        method: "GET",
      };

      const users = await axios(options)
        .then((e) => {
          return e.data;
        })
        .catch((e: AxiosError) => {
          throw Error(e.message);
        });
      console.log("users");
      console.log(users);
      setUsers(users);
    };
    fetchUsers();
  }, []);
  const hoge = users.map((user) => {
    return (
      <Tr
        onClick={() => {
          alert("test");
        }}
      >
        <Td>{user.name}</Td>
        <Td>{user.token}</Td>
      </Tr>
    );
  });
  // return users.map((user) => {
  //   return <Heading>{user.name}</Heading>;
  // });
  // <>
  //   <Heading>テスト</Heading>
  //   {hoge}
  // </>
  return (
    <>
      <TableContainer
        width={"68rem"}
        height={"32rem"}
        marginLeft={"3rem"}
        backgroundColor={"#4682B4"}
        borderRadius={"0.5rem"}
      >
        <Table size="sm">
          <Thead height={"4rem"}>
            <Tr>
              <Th>name</Th>
              <Th>token</Th>
            </Tr>
          </Thead>
          <Tbody height={"8rem"}>{hoge}</Tbody>
          <Tfoot height={"4rem"}>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
