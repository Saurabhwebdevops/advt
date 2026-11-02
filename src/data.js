/* Edit these to match the real shop. */
export const SHOP = {
  name: 'Advance Technology',
  phone: '+917248002222',
  email: 'advt@gmail.com',
  address: 'Shop address, City, PIN code',
  hours: 'Mon to Sat, 10:00 to 19:00',
  warranty: 90,
};

export const DEVICES={
  ac:{label:'AC',faults:[
    {l:'Not cooling',cause:'Low refrigerant from a leak, dirty filters and coils, or a weak compressor capacitor.',fix:'Check gas pressure and airflow, clean the coils, find and seal any leak, then refill to the rated level.',time:'Same day',price:1500,level:3},
    {l:'Water leaking indoors',cause:'A blocked drain pipe, or an indoor unit that is not level.',fix:'Clear the drain line, level the unit and run a water test before we leave.',time:'About 1 hour',price:600,level:1},
    {l:'Noisy or vibrating',cause:'A loose fan blade, a worn fan motor bearing, or a loose outdoor unit mount.',fix:'Tighten the mounts, lubricate or replace the fan motor, and test under load.',time:'Same day',price:900,level:2},
    {l:'Error code or switches off',cause:'A faulty sensor, a failing control board, or a supply that trips on low voltage.',fix:'Read the code, test the sensors and the board, then repair or replace the failed part.',time:'1 to 2 days',price:1800,level:4},
    {l:'Yearly service',cause:'Dust and mould on filters and coils cut cooling and push up the power bill.',fix:'Jet wash the indoor and outdoor units, then check gas pressure and electrical connections.',time:'About 1 hour',price:600,level:1}
  ]},
  fridge:{label:'Refrigerator',faults:[
    {l:'Not cooling',cause:'A failed start relay, a faulty thermostat, a blocked fan, or low gas.',fix:'Test the relay, thermostat and fan motor, replace what failed, and check gas if the compressor runs hot.',time:'Same day',price:1200,level:3},
    {l:'Freezer works, fridge is warm',cause:'A frozen evaporator fan, or a defrost heater or sensor that has stopped working.',fix:'Thaw the coil, replace the fan or defrost parts, and watch a full cooling cycle.',time:'1 day',price:1400,level:3},
    {l:'Water under the fridge',cause:'A blocked defrost drain, or a door gasket that no longer seals.',fix:'Clear the drain and replace the gasket if it has gone hard or torn.',time:'About 1 hour',price:500,level:1},
    {l:'Compressor noisy or not starting',cause:'A failed start capacitor or relay, or worn compressor windings.',fix:'Test the windings and start parts. Replace the relay or capacitor, or quote a compressor change if the windings have failed.',time:'1 to 2 days',price:1200,level:5}
  ]},
  washer:{label:'Washing machine',faults:[
    {l:'Not draining',cause:'A clogged pump filter, a kinked drain hose, or a failed drain pump.',fix:'Clear the filter and hose, test the pump, and replace it if it hums without moving water.',time:'About 1 hour',price:700,level:2},
    {l:'Drum not spinning',cause:'A snapped belt, worn motor brushes, or a failed motor control board.',fix:'Replace the belt or brushes, then test the motor and board under load.',time:'Same day',price:1100,level:3},
    {l:'Loud noise during spin',cause:'Worn drum bearings or a failed shock absorber.',fix:'Open the tub, replace the bearings and seals, then balance-test the drum.',time:'1 to 2 days',price:2500,level:4},
    {l:'Water leaking',cause:'A cracked inlet hose, a worn door seal, or a loose drain connection.',fix:'Trace the leak with a dry run and replace the failing hose or seal.',time:'About 1 hour',price:600,level:2},
    {l:'Will not start, door lock error',cause:'A failed door lock, a blown fuse, or a damaged control board.',fix:'Test the lock and fuse, then repair or replace the board.',time:'1 day',price:900,level:3}
  ]},
  tv:{label:'TV',faults:[
    {l:'Sound but no picture',cause:'Dead backlight strips, the most common cause on LED TVs.',fix:'Confirm with a torch test, replace the backlight strips and check the driver.',time:'2 to 4 days',price:3500,level:4},
    {l:'Lines or patches on screen',cause:'A loose or burnt panel ribbon, or a failing timing board.',fix:'Reseat and test the ribbons, then replace the timing board if the fault stays.',time:'2 to 4 days',price:4000,level:4},
    {l:'Will not switch on, standby light on',cause:'A failed capacitor or regulator on the power board.',fix:'Replace the failed parts on the power board and test at full brightness.',time:'1 to 3 days',price:2500,level:3},
    {l:'No HDMI or ports dead',cause:'A damaged port or a failed input chip on the main board.',fix:'Replace the port or repair the main board at component level.',time:'1 to 2 days',price:1500,level:3}
  ]},
  microwave:{label:'Microwave or oven',faults:[
    {l:'Runs but does not heat',cause:'A failed magnetron, a blown high-voltage diode or capacitor, or a door switch fault.',fix:'Discharge the unit, test the high-voltage circuit and replace the failed part.',time:'1 day',price:1200,level:3},
    {l:'Sparks inside',cause:'A burnt waveguide cover or food residue on the cavity wall.',fix:'Replace the waveguide cover and clean the cavity.',time:'About 1 hour',price:500,level:2},
    {l:'Display or buttons dead',cause:'A failed control board or a cracked touch panel.',fix:'Repair the board at component level or replace the panel.',time:'1 to 2 days',price:1000,level:3}
  ]},
  heater:{label:'Water heater',faults:[
    {l:'No hot water',cause:'A failed heating element, a stuck thermostat, or a tripped thermal cut-out.',fix:'Test the element and thermostat, replace the failed part and check the safety valve.',time:'Same day',price:900,level:2},
    {l:'Trips the MCB',cause:'A burnt element or damaged wiring leaking current to earth.',fix:'Test insulation, replace the element and renew damaged wiring.',time:'Same day',price:1000,level:3},
    {l:'Water leaking',cause:'A worn gasket or loose fittings. A corroded tank cannot be repaired.',fix:'Check the gasket and fittings. If the tank has corroded we tell you plainly and quote a replacement.',time:'Same day',price:600,level:2}
  ]}
};

export const ALSO=['Water purifiers','Air coolers','Inverters and UPS','Ceiling fans','Induction cooktops','Dishwashers','Chimneys','Mixer grinders'];

export const SERVICES=[
  {t:'Air conditioners',d:'Gas refill, leak repair, control board faults, fan motor and compressor work, plus jet-wash servicing.',tags:['Split','Window','Inverter AC'],ico:'ac'},
  {t:'Refrigerators',d:'Cooling loss, frost build-up, worn door seals and compressor faults on single door, double door and side-by-side units.',tags:['Frost-free','Direct cool','Gasket'],ico:'fridge'},
  {t:'Washing machines',d:'Drain, spin, bearing and leak faults on top loaders, front loaders and semi-automatics.',tags:['Front load','Top load','Semi-auto'],ico:'washer'},
  {t:'TVs and displays',d:'Backlight, panel, power board and port faults on LED and smart TVs of any size.',tags:['LED','Smart TV','Power board'],ico:'tv'},
  {t:'Kitchen appliances',d:'Microwaves, ovens, induction cooktops, chimneys and mixers brought back to safe working order.',tags:['Microwave','Induction','Chimney'],ico:'microwave'},
  {t:'Board-level repair',d:'Control boards from any appliance repaired at component level, often for far less than a new board.',tags:['PCB','Hot air','Capacitors'],ico:'chip'}
];

export const STEPS=[
  {t:'A few minutes',h:'Book the call',p:'Tell us the appliance, brand and fault. You get a ticket reference and a visit slot.'},
  {t:'Same day or next',h:'Technician visit',p:'The technician arrives with common parts and checks the appliance with a clamp meter, gauges and a multimeter to find the fault.'},
  {t:'On the spot',h:'Quote and approval',p:'The fault, the fix, the part grade and the price, in writing. Nothing is replaced until you approve.'},
  {t:'Same visit or 1 to 3 days',h:'Repair and test',p:'Most repairs finish at your home. Control boards, compressors and larger TVs may need the workshop, and you are told before anything leaves.'},
  {t:'On completion',h:'Handover with warranty',p:'You see it working before you pay. The warranty is written on the invoice with your ticket reference.'}
];

export const TICKETS=[
  {id:'VM-20418',dev:'AC',f:'Not cooling',o:0},
  {id:'VM-20419',dev:'Refrigerator',f:'Compressor not starting',o:2},
  {id:'VM-20420',dev:'Washing machine',f:'Not draining',o:4},
  {id:'VM-20421',dev:'TV',f:'No backlight',o:6},
  {id:'VM-20422',dev:'Microwave',f:'Not heating',o:7}
];
export const STAGES=['Booked','Visit scheduled','Awaiting approval','Repairing','Testing','Done'];
export const PILL=['a','a','b','b','c','d'];

export const TOOLS=[
  ['Clamp meter','Compressor and motor current shows whether an AC or fridge is working too hard.'],
  ['Manifold gauge set','Gas pressure in ACs and refrigerators, to separate a leak from a blockage.'],
  ['Electronic leak detector','Finds refrigerant leaks instead of guessing at them.'],
  ['Multimeter and insulation tester','Failed heaters, weak capacitors and shorted motor windings.'],
  ['Hot-air rework station','Control-board repair at component level.'],
  ['Thermal camera','Hot spots on boards and loose connections inside the unit.']
];

export const FAQ=[
  ['Do you visit my home?','Yes, for ACs, refrigerators, washing machines and most large appliances. Small items can be brought to the shop. Tell us your area when you book and we confirm.'],
  ['Is there a visit fee?','A visit fee applies, and the quote tells you the amount before the technician starts work. It is adjusted against the repair if you go ahead.'],
  ['How soon can someone come?','Most calls get a visit the same day or the next, depending on your area and the time you book.'],
  ['Which brands do you repair?','All the major brands. Give us the brand and model when you book so the technician brings the right parts.'],
  ['Are the spare parts genuine?','The quote names the part grade, original or tested aftermarket, so you can choose by price and quality.'],
  ['What if it cannot be repaired?','You pay only the visit fee. We explain what we found, and whether replacing the appliance makes more sense.']
];

export const DEVICE_OPTIONS = ['AC', 'Refrigerator', 'Washing machine', 'TV', 'Microwave or oven', 'Water heater', 'Other appliance'];
export const VISIT_OPTIONS = ['Home visit', 'I will bring it to the shop'];
