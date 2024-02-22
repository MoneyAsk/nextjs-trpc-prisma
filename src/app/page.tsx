import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/db";
import { trpc } from "@/utils/trpc";
import UserList from "@/components/UserList";
export default async function  Home() {
    
  return (
    <main className={styles.main}>
      <UserList />
    </main>
  );
}

