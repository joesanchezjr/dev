"use client";
import React from "react";

import HeadlessModal from "@/components/headless-modal";

export default function PhotoModal(props: any) {
  return <HeadlessModal>{props?.params?.slug}</HeadlessModal>;
}
