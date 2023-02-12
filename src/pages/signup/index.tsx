import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/page.module.scss'
import logoImg from '../../../public/logo.svg';

import { Input } from "@/components/ui/Input/index";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Pizzaria Baraúna - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Pizzaria" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form>
          <Input
              placeholder="Digite seu Nome"
              type="text"
            />

            <Input
              placeholder="Digite seu email"
              type="text"
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
            />

            <Button
              type='submit'
              loading={false}
              >
              Acessar
            </Button>


          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? cadastre-se</a>
          </Link>


        </div>
      </div>
    </>
  )
}
