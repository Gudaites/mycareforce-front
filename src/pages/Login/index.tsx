import React from "react";

import { useUser } from "../../hooks/user";
import {
  Container,
  Content,
  AnimationContainer,
  Background,
} from "./styles.ts";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";

type LoginFormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    login(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Nurse alguma coisa</h1>
            <input
              {...register("email", { required: "E-mail é obrigatório" })}
              type="email"
              placeholder="E-mail"
            />
            <input
              {...register("password", { required: "Senha é obrigatória" })}
              // icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <Button type="submit">Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignIn;
