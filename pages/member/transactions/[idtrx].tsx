import jwtDecode from "jwt-decode";
import React from "react";
import Sidebar from "../../../components/organisms/Member/Sidebar";
import TransactionsDetailContent from "../../../components/organisms/Member/TransactionsDetailContent";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionDetailContentProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(
  props: TransactionDetailContentProps
) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idtrx: string;
  };
}

export async function getServerSideProps({ req, params }: getServerSideProps) {
  const { token } = req.cookies;
  const { idtrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  //serverside
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMAGE;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idtrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
