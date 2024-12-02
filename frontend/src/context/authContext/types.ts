import React from "react";

export interface IAuthContext {
  auth?: IAuthContextState;
  setAuth?: React.Dispatch<React.SetStateAction<IAuthContextState>>
}

export interface IAuthContextState {
  token?: string;
}