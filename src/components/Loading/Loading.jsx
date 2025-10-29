import React from "react";
import * as S from "./Loading.styles.js";

export default function Loading({ message = "Carregando..." }) {
  return (
    <S.LoadingContainer>
      <S.Spinner />
      <S.LoadingText>{message}</S.LoadingText>
    </S.LoadingContainer>
  );
}
