import React from "react";

export declare interface RadioInterface {
  name: string;
  value: string;
  className?: string;
  id?: string;
  checked?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => any;
}
