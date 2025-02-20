'use client'
import React from "react";
import {LinePage} from "@/components/line";
import {DonutPage} from "@/components/donut";
import {BarPage} from "@/components/bar";
import {AreaPage} from "@/components/area";
import { RadarPage} from "@/components/radar";
import {BarBasicPage} from "@/components/barbasic";
import {ScatterPage} from "@/components/scatter";
import {BarTwoPage} from "@/components/bartwo";
export default function Home() {

    return (
        <div className="min-h-screen grid grid-cols-4 items-center justify-center  gap-6 rounded-md px-10">
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <LinePage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <DonutPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <BarPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <AreaPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <RadarPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <BarBasicPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <ScatterPage/>
            </div>
            <div className="bg-white text-white h-72 flex items-center   justify-center rounded-md ">
                <BarTwoPage/>
            </div>
        </div>
    );
}
