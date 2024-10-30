'use client'

import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const equipmentData = [
    { no: 1, name: "Roller Brake Tester" },
    { no: 2, name: "Equipment for Axle Weight Measurement" },
    { no: 3, name: "Suspension Tester" },
    { no: 4, name: "Side Slip Tester" },
    { no: 5, name: "Joint Play Tester", frequency: "NA", lastCalibration: "NA" },
    { no: 6, name: "Electronic Steering Gear Play Detector" },
    { no: 7, name: "Headlight Tester\n(Semi-automatic / fully automatic)" },
    { no: 8, name: "Opacimeter / Smoke meter" },
    { no: 9, name: "Exhaust Gas Analyzer" },
    { no: 10, name: "Speedometer/ Speed Governor Tester" },
    { no: 11, name: "Sound level meter" },
    { no: 12, name: "Test fingers", frequency: "NA", lastCalibration: "NA" },
    { no: 13, name: "Insulation Tester" },
    { no: 14, name: "Malfunction Indicator Lamp - MIL\n(part of OBD Scan Tool)", frequency: "NA", lastCalibration: "NA" },
  ]

  const inspectionData = [
    { part: "Part A: Automated Tests – Defining ELV or Fitness", tests: [
      { no: 1, name: "(a) Left headlamp dipped beam vertical deviation (%)", rule: "1 (a)" },
      { no: "", name: "(b) Right headlamp dipped beam vertical deviation (%)", rule: "1 (b)" },
      { no: 2, name: "(a) Exhaust gas emission – CO%", rule: "11 (a)" },
      { no: "", name: "(b) Exhaust gas emission – HC (ppm)", rule: "11 (b)" },
      { no: "", name: "(c) Exhaust gas emission (High idle emission) – CO%", rule: "11 (c)" },
      { no: "", name: "(d) Exhaust gas emission (High idle emission) – Lambda λ", rule: "11 (d) (iv)" },
      { no: "", name: "(e) Smoke density (m-1)", rule: "11 (e)" },
      { no: 3, name: "Service brake efficiency (%)", rule: "12 (a)" },
      { no: 4, name: "Steering gear free play (degrees)", rule: "13" },
    ]},
    { part: "Part B: Automated Tests – Defining Fitness", tests: [
      { no: 5, name: "Speed Governor", rule: "27" },
    ]},
    { part: "Part C: Automated Tests – Additional information about health of the vehicle", tests: [
      { no: 6, name: "Side Slip Test", rule: "14", result: "NA" },
      { no: 7, name: "Suspension Test", rule: "15", result: "NA" },
      { no: 8, name: "Joint Play Test", rule: "16", result: "NA" },
      { no: 9, name: "Parking Brake efficiency (%)", rule: "12 (b)", result: "NA" },
      { no: 10, name: "Speedometer Test", rule: "17(a)", result: "NA" },
    ]},
    { part: "Part D: Non-Automated Tests (for electric vehicles (EV) & hybrid-electric power train vehicles)–Defining ELV or Fitness", tests: [
      { no: 11, name: "Protection against electric shock (For electric & hybrid-electric power train vehicles only, if system voltage is > 60 V DC or 30 V AC)", rule: "31" },
      { no: 12, name: "Insulation Resistance Measurement Test (For electric & hybrid-electric power train vehicles only if system voltage is > 60 V DC or 30 V AC)", rule: "32" },
    ]},
    { part: "Part E: Non-Automated Tests – Defining Fitness", tests: [
      { no: 13, name: "Headlamps Assembly", rule: "2" },
      { no: 14, name: "Lights", rule: "3" },
      { no: 15, name: "Suppressor cap/ High tension cable", rule: "4" },
      { no: 16, name: "Rear view mirrors", rule: "5" },
      { no: 17, name: "Safety glass (Windscreen)", rule: "6" },
      { no: 18, name: "Horn", rule: "7" },
      { no: 19, name: "Silencer", rule: "8 (a)" },
      { no: 20, name: "(a) Windscreen wiper blades", rule: "9 (a)" },
      { no: "", name: "(b) Windscreen wiper system", rule: "9 (b)" },
      { no: 21, name: "Dashboard equipment", rule: "10" },
      { no: 22, name: "Rear under run protection device (RUPD) (For N2, N3, T3 and T4)", rule: "18" },
      { no: 23, name: "Lateral under run protection device (LUPD) (For N2, N3, T3 and T4)", rule: "19" },
      { no: 24, name: "FASTag", rule: "20" },
      { no: 25, name: "Priority Seats, Signs, securing of crutches/ canes/walker, handrail/stanchions, controls at priority seats for differently abled passengers and passengers with reduced mobility (Only for buses)", rule: "21" },
      { no: 26, name: "Wheel-chair arrangements for differently abled passengers and passengers with reduced mobility (Only for buses)", rule: "22" },
      { no: 27, name: "Vehicle Location Tracking (VLT) Device", rule: "23" },
      { no: 28, name: "High Security Registration Plate (HSRP)", rule: "24" },
      { no: 29, name: "Battery", rule: "25" },
      { no: 30, name: "Safety belt (Seatbelt)", rule: "26" },
      { no: 31, name: "Spray Suppression Devices (For all N, T3 and T4)", rule: "28" },
      { no: 32, name: "Tyres", rule: "29" },
      { no: 33, name: "Retro- Reflector and reflective tapes", rule: "30" },
      { no: 34, name: "State of Charge (SOC) Indicator on Dashboard (for electric vehicles)", rule: "33" },
    ]},
    { part: "Part F: Non-Automated Test – Additional information about health of the vehicle", tests: [
      { no: 35, name: "Malfunction Indicator Lamp - MIL (part of OBD Scan Tool)", rule: "39" },
      { no: 36, name: "Exhaust Noise Test (dB)", rule: "8 (b)" },
    ] },
  ]

  const twoWheelerData = [
    { part: "Part A: Automated Tests – Defining ELV or Fitness Criteria", tests: [
      { no: 1, name: "Headlight passing beam vertical deviation (%)", rule: "34" },
      { no: 2, name: "(a) Exhaust gas emission – CO%", rule: "35 (a)" },
      { no: "", name: "(b) Exhaust gas emission – HC (ppm)", rule: "35 (b)" },
      { no: "", name: "(c) Exhaust gas emission (High idle emission) – CO%", rule: "35 (c)" },
      { no: "", name: "(d) Exhaust gas emission (High idle emission) – Lambda λ", rule: "35 (d)" },
    ]},
    { part: "Part B: Automated Tests – Additional information about health of the vehicle", tests: [
      { no: 3, name: "Brake efficiency (%)", rule: "36" },
    ]},
    { part: "Part C: Non-Automated Tests (for electric vehicles (EV) & hybrid-electric power train vehicles) – Defining ELV or Fitness", tests: [
      { no: 4, name: "Protection against electric shock (For electric & hybrid-electric power train vehicles only, if system voltage is > 60 V DC or 30 V AC)", rule: "31 or 37" },
      { no: 5, name: "Insulation Resistance Measurement Test (For electric & hybrid-electric power train vehicles only, if system voltage is > 60 V DC or 30 V AC)", rule: "32 or 38" },
    ]},
    { part: "Part D: Non-Automated Test – Additional information about health of the vehicle", tests: [
      { no: 6, name: "Malfunction Indicator Lamp - MIL (part of OBD Scan Tool)", rule: "39" },
    ]},
  ]
  
  const threeWheelerData = [
    { part: "Part A: Automated Tests – Defining ELV or Fitness Criteria", tests: [
      { no: 1, name: "(a) Exhaust gas emission – CO%", rule: "11 (a)" },
      { no: "", name: "(b) Exhaust gas emission – HC (ppm)", rule: "11 (b)" },
      { no: "", name: "(c) Exhaust gas emission (High idle emission) – CO%", rule: "11 (c)" },
      { no: "", name: "(d) Exhaust gas emission (High idle emission) – Lambda λ", rule: "11 (d)" },
      { no: "", name: "(e) Smoke density (m-1)", rule: "11 (e)" },
      { no: 2, name: "Service brake efficiency (%)", rule: "12 (a)" },
      { no: 3, name: "Speedometer (For E-rickshaw or E-cart)", rule: "17 (b)" },
    ]},
    { part: "Part B: Automated Tests – Additional information about health of the vehicle", tests: [
      { no: 4, name: "Parking Brake efficiency (%)", rule: "12 (b)", result: "NA" },
    ]},
    { part: "Part C: Non-Automated Tests (for electric vehicles (EV) & hybrid-electric power train vehicles)– Defining ELV or Fitness", tests: [
      { no: 5, name: "Protection against electric shock (For electric & hybrid-electric power train vehicles only, if system voltage is > 60 V DC or 30 V AC)", rule: "31 or 37" },
      { no: 6, name: "Insulation Resistance Measurement Test (For electric & hybrid-electric power train vehicles only, if system voltage is > 60 V DC or 30 V AC)", rule: "32 or 38" },
    ]},
    { part: "Part D: Non-Automated Tests – Defining Fitness", tests: [
      { no: 7, name: "Headlamps Assembly", rule: "2" },
      { no: 8, name: "Lights", rule: "3" },
      { no: 9, name: "Suppressor cap/ High tension cable", rule: "4" },
      { no: 10, name: "Rear view mirrors", rule: "5" },
      { no: 11, name: "Safety glass (Windscreen)", rule: "6" },
      { no: 12, name: "Horn", rule: "7" },
      { no: 13, name: "Silencer", rule: "8 (a)" },
      { no: 14, name: "(a) Windscreen wiper blades", rule: "9 (a)" },
      { no: "", name: "(b) Windscreen wiper system", rule: "9 (b)" },
      { no: 15, name: "Dashboard equipment", rule: "10" },
      { no: 16, name: "High Security Registration Plate (HSRP)", rule: "24" },
      { no: 17, name: "Battery", rule: "25" },
      { no: 18, name: "Tyres", rule: "29" },
      { no: 19, name: "Retro- Reflector and reflective tapes", rule: "30" },
      { no: 20, name: "State of Charge (SOC) Indicator on Dashboard (Only for electric vehicles)", rule: "33" },
  
    ]},
    { part: "Part E: Non-Automated Test – Additional information about health of the vehicle", tests: [
      { no: 21, name: "Exhaust Noise Test (dB)", rule: "8 (b)" },
    ]},
  ]
  
  function InspectionTable({ data }: { data: typeof twoWheelerData | typeof threeWheelerData }) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Sl. No.</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Name of Test</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">As per rule 189 Table D</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Applicable (Yes/No)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Recorded Value / Observation</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Result (P-Pass / F-Fail)</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(1)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(2)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(3)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(4)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(5)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(6)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((part, partIndex) => (
            <React.Fragment key={partIndex}>
              <TableRow>
                <TableCell colSpan={6} className="font-medium bg-gray-300 border-2 border-black">
                  {part.part}
                </TableCell>
              </TableRow>
              {part.tests.map((test, testIndex) => (
                <TableRow key={testIndex}>
                  <TableCell className="border-2 border-black">{test.no}</TableCell>
                  <TableCell className="border-2 border-black">{test.name}</TableCell>
                  <TableCell className="border-2 border-black">{test.rule}</TableCell>
                  <TableCell className="border-2 border-black p-0">
                    <Input className="border-none h-full" />
                  </TableCell>
                  <TableCell className="border-2 border-black p-0">
                    <Input className="border-none h-full" />
                  </TableCell>
                  <TableCell className="border-2 border-black p-0">
                    {'result' in test ? test.result : <Input className="border-none h-full" />}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    )
  }
  
export default function Component() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">

      <div className="w-full mx-w-5xl mb-5">
        <h1 className="text-center text-lg font-bold mb-2">Form 69</h1>
        <p className="text-center font-semibold mb-2">[See rule 181 (7)]</p>
        <h2 className="text-center text-lg font-bold mb-4">FORM FOR VEHICLE TEST REPORT</h2>
      
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td colSpan={2} className="">
                <p className="font-semibold text-black">Name, logo & details of the ATS Operator</p>
              </td>
            </tr>
            <tr>
              <td className="border-2 border-black border-dashed p-4">
                <div className="border-2 border-black p-2 mb-2 h-12 flex justify-center">
                  <p>QR Code</p>
                </div>
              </td>
              <td className="border-2 border-black border-dashed p-4">
                <div className="border-2 border-black p-2 mb-2 h-12 flex flex-col justify-center">
                  <p className="text-right">&lt;GPS coordinated date and time&gt;</p>
                  <p className="text-right">&lt;Picture of the Registration Plate of the Vehicle&gt;</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={9} className="text-lg font-semibold border-2 border-black bg-gray-300 text-center text-black">
              General Details of Automated Testing Station
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">Registration no.</TableHead>
            <TableHead colSpan={3} className="border-2 border-black text-center bg-gray-300 text-black">Location</TableHead>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">Operating Agency Name</TableHead>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">Test no.</TableHead>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">Date of Test (DD-MM-YY)</TableHead>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">Time of Test</TableHead>
            <TableHead rowSpan={2} className="border-2 border-black bg-gray-300 text-black">
              Test Status (Initial Test/ 1st Re-Test / 2nd Re-test[1])
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">RTO</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">District</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">State</TableHead>
          </TableRow>
          <TableRow>
            {[...Array(9)].map((_, index) => (
              <TableHead key={index} className="border-2 border-black text-black">{`(${index + 1})`}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {[...Array(9)].map((_, index) => (
              <TableCell key={index} className="border-2 border-black p-0">
                <Input className="border-none h-full p-3" />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      
      <Table className="mt-6 mb-8">
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold border-2 border-black bg-gray-300 text-black">Due Date of Fitness test/ Re-test</TableCell>
            <TableCell className="border-2 border-black p-0">
              <Input className="border-none h-full" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={11} className="text-lg font-semibold border-2 border-black bg-gray-300 text-center text-black">
              Details of Vehicle
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Registration no.</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Vehicle Class</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Make</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Model</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Engine Number</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Chassis Number</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Fuel Type</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Emission Norms</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Speed Governor number (if any)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">GVW (kg)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Year of Mfg.</TableHead>
          </TableRow>
          <TableRow>
            {[...Array(11)].map((_, index) => (
              <TableHead key={index} className="border-2 border-black text-black">{`(${index + 1})`}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {[...Array(11)].map((_, index) => (
              <TableCell key={index} className="border-2 border-black p-0">
                <Input className="border-none h-full" />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>

      <h4 className="text-md font-semibold mb-3 mt-3 text-black">1. Automated Equipment Calibration Details</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Sl. No.</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Name of Equipment</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">ID. No.</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Calibration Frequency</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Date of Last Calibration</TableHead>
          </TableRow>
          <TableRow>
            {[...Array(5)].map((_, index) => (
              <TableHead key={index} className="border-2 border-black text-black">{`(${index + 1})`}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {equipmentData.map((row) => (
            <TableRow key={row.no}>
              <TableCell className="border-2 border-black">{row.no}</TableCell>
              <TableCell className="border-2 border-black whitespace-pre-line">{row.name}</TableCell>
              <TableCell className="border-2 border-black p-0">
                <Input className="border-none h-full" />
              </TableCell>
              <TableCell className="border-2 border-black p-0">
                {row.frequency === "NA" ? (
                  "NA"
                ) : (
                  <Input className="border-none h-full" />
                )}
              </TableCell>
              <TableCell className="border-2 border-black p-0">
                {row.lastCalibration === "NA" ? (
                  "NA"
                ) : (
                  <Input className="border-none h-full" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h4 className="text-md font-semibold mb-3 mt-3 text-center text-black">2. Inspection Result</h4>
      <h4 className="text-md underline font-medium mb-2 mt-2 text-black">(a) For Quadricycles, Light, Medium & Heavy Motor Vehicles</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Sl. No.</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Name of Test</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">As per rule 189 Table D</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Applicable (Yes/No)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Recorded Value / Observation</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">Result (P-Pass / F-Fail)</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(1)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(2)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(3)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(4)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(5)</TableHead>
            <TableHead className="border-2 border-black bg-gray-300 text-black">(6)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inspectionData.map((part, partIndex) => (
            <React.Fragment key={partIndex}>
              <TableRow>
                <TableCell colSpan={6} className="font-medium bg-gray-300">
                  {part.part}
                </TableCell>
              </TableRow>
              {part.tests.map((test, testIndex) => (
                <TableRow key={testIndex}>
                  <TableCell className="border-2 border-black">{test.no}</TableCell>
                  <TableCell className="border-2 border-black">{test.name}</TableCell>
                  <TableCell className="border-2 border-black">{test.rule}</TableCell>
                  <TableCell className="border-2 border-black p-0">
                    <Input className="border-none h-full" />
                  </TableCell>
                  <TableCell className="border-2 border-black p-0">
                    <Input className="border-none h-full" />
                  </TableCell>
                  <TableCell className="border-2 border-black p-0">
                    {'result' in test ? test.result : <Input className="border-none h-full" />}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      <div className="space-y-8">
        <div>
          <h4 className="text-md underline font-medium mb-3 mt-3 text-black">(b) For Three Wheelers</h4>
          <InspectionTable data={threeWheelerData} />
        </div>

        <div>
          <h4 className="text-md underline font-medium mb-3 mt-3 text-black">(c) For Two Wheelers</h4>
          <InspectionTable data={twoWheelerData} />
        </div>
      </div>

      <Card className="mt-4 border-none shadow-none">
        <CardContent className="space-y-6 p-0">
          <div className="pt-6">
            <h3 className="text-md font-semibold mb-3 text-center">(3). Overall Results</h3>
            <Textarea className="min-h-[100px] w-full border-2 border-black" placeholder="Enter summary here..." />
          </div>
          <div className="pt-6">
            <h3 className="text-md font-semibold mb-3 text-center">(4). Summary (Issues identified):</h3>
            <Textarea className="min-h-[100px] w-full border-2 border-black" placeholder="Enter summary here..." />
          </div>
          <div className="">
            <h3 className="text-md font-semibold mb-3 text-center">(5). Inspection Photos (to be uploaded):</h3>
            <Table>
              <TableBody>
                {[0, 1].map((row) => (
                  <TableRow key={row}>
                    {[...Array(4)].map((_, col) => (
                      <TableCell key={col} className="border-2 border-black p-4">
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="">
            <h3 className="text-md font-semibold mb-3 text-center">(6). Inspecting officer notes:</h3>
            <Textarea className="min-h-[100px] w-full border-2 border-black" placeholder="Enter notes here..." />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold mb-2 ml-2">Digital signature of ATS operator</h3>
            {/* <Input type="text" placeholder="Enter digital signature" className="w-full" /> */}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch">
          <p className="text-sm text-black mb-4">
            <strong>Note:</strong> — The principal rules were published in the Gazette of India, Extraordinary, Part II, Section 3, Sub-section (i)
            vide notification number G.S.R. 590(E), dated the 2<sup>nd</sup> June, 1989 and lastly amended vide notification
            number G.S.R 714(E) dated the 20<sup>th</sup> September, 2022.
          </p>
          <div className="self-end text-right mt-2">
            <p className="text-sm text-black">[No. RT-25035/05/2021-RS]</p>
            <p className="text-sm font-semibold mt-1">MAHMOOD AHMED, Joint Secy.</p>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              onClick={() => window.print()}
            >
              Download PDF
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}