"use client"

import { useState } from "react";

import { Image } from "../image";
import { RadioGroup } from "../radio-group";
import { Table } from "../table";
import { Tabs } from "../tabs";

const internationalSizes = {
  headers: ["EUR", "DE", "IT", "USA", "UK"],
  rows: [
    ["34", "32", "38", "2", "6"],
    ["36", "34", "40", "4", "8"],
    ["38", "36", "42", "6", "10"],
    ["40", "38", "44", "8", "12"],
    ["42", "40", "46", "10", "14"],
    ["44", "42", "48", "12", "16"],
  ],
};

const bodySizesCm = {
  headers: ["EUR", "Pecho (A)", "Cintura (B)", "Cadera (C)"],
  rows: [
    ["34", "81 - 84 cm", "63 - 66 cm", "89 - 92 cm"],
    ["36", "85 - 88 cm", "67 - 70 cm", "93 - 96 cm"],
    ["38", "89 - 92 cm", "71 - 74 cm", "97 - 100 cm"],
    ["40", "93 - 98 cm", "75 - 80 cm", "101 - 106 cm"],
    ["42", "99 - 104 cm", "81 - 86 cm", "107 - 112 cm"],
    ["44", "105 - 110 cm", "87 - 97 cm", "113 - 118 cm"]
  ],
}

// Used AI to move body sizes units from cm to in
const bodySizesIn = {
  headers: ["EUR", "Pecho (A)", "Cintura (B)", "Cadera (C)"],
  rows: [
    ["34", "31.9 - 33.1 in", "24.8 - 26.0 in", "35.0 - 36.2 in"],
    ["36", "33.5 - 34.6 in", "26.4 - 27.6 in", "36.6 - 37.8 in"],
    ["38", "35.0 - 36.2 in", "28.0 - 29.1 in", "38.2 - 39.4 in"],
    ["40", "36.6 - 38.6 in", "29.5 - 31.5 in", "39.8 - 41.7 in"],
    ["42", "39.0 - 40.9 in", "31.9 - 33.9 in", "42.1 - 44.1 in"],
    ["44", "41.3 - 43.3 in", "34.3 - 38.2 in", "44.5 - 46.5 in"]
  ],
};

export function SizeGuideTabs() {
  const [bodySizeUnit, setBodySizeUnit] = useState("cm")

  const bodySizeDataset = bodySizeUnit === "cm" ? bodySizesCm : bodySizesIn

  return (
    <Tabs defaultValue="international-sizes">
      <div className="flex justify-between items-center gap-4 min-h-8">
        <div>
          <Tabs.List>
            <Tabs.Tab value="international-sizes">Tallas Internacionales</Tabs.Tab>
            <Tabs.Tab value="body-sizes">Medidas Del Cuerpo</Tabs.Tab>
          </Tabs.List>
        </div>
        <Tabs.Panel value="body-sizes">
          <div className="flex gap-2.5 items-center text-xs">
            <span>Ver medidas en:</span>
            <RadioGroup
              name="body-measurement"
              value={bodySizeUnit}
              onChange={setBodySizeUnit}
              options={[
                { value: "cm", label: "CM" },
                { value: "in", label: "IN" },
              ]}
            />
          </div>
        </Tabs.Panel>
      </div>

      <Tabs.Panel value="international-sizes" className="py-20">
        <div className="w-full max-w-81 mx-auto overflow-x-auto">
          <Table data={internationalSizes} />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="body-sizes" className="py-20">
        <div className="flex justify-between items-center gap-15 px-8">
          <div className="shrink-0">
            <Image width={145} height={301} src="/assets/body-sizes-guide.png" alt="Diagrama de guía de tallas que muestra las medidas del cuerpo: A pecho, B cintura y C cadera." />
          </div>
          <div className="flex-1">
            <Table data={bodySizeDataset} />
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  )
}