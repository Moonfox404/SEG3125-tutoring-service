"use client";

import React, { Suspense } from "react";
import ReservationForm from "@/app/components/ReservationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faLandmark } from "@fortawesome/free-solid-svg-icons";

export default function ExamReviewReservation() {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="text-primary text-2xl font-bold">
        {" "}
        <FontAwesomeIcon icon={faBookmark} size="xl" /> Reservation
      </h1>
      <Suspense>
        <ReservationForm />
      </Suspense>
    </div>
  );
}
