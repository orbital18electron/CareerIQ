// src/lib/roadmapKB.js
export const ROADMAP_KB = {
  "Software Engineer": {
    tagline:"Build the systems that power the world",
    years:[
      { label:"Year 1 — Foundation",color:"#5b9cf6",title:"Build your base",items:["Learn Python or JavaScript as your first language","Complete CS50 or an equivalent intro to CS course","Understand how computers work — OS, memory, networking basics","Practice 2–3 LeetCode Easy problems per week","Build a simple calculator or to-do app as your first project"] },
      { label:"Year 2 — Core CS",color:"#a78bfa",title:"Master the fundamentals",items:["Study Data Structures: arrays, linked lists, trees, graphs","Learn Algorithms: sorting, searching, recursion, dynamic programming","Pick a web framework — React (frontend) or Node/Django (backend)","Understand SQL databases: MySQL or PostgreSQL","Build a full-stack CRUD web app and host it on Vercel"] },
      { label:"Year 3 — Real World",color:"#3ecfb0",title:"Go professional",items:["Land a summer internship — start applying in August/September","Learn Git, GitHub, and collaborative workflows","Study System Design: load balancing, caching, REST APIs","Contribute to an open-source project on GitHub","Prepare DSA for placements — 150+ LeetCode problems"] },
      { label:"Year 4 — Launch",color:"#e0a800",title:"Launch your career",items:["Complete campus placements or off-campus applications","Build a portfolio with 3–4 polished projects on GitHub","Get AWS Cloud Practitioner or Google Cloud certification","Network on LinkedIn — connect with engineers at target companies","Prep for system design rounds (Grokking the System Design Interview)"] },
    ],
    skills:[
      {label:"Python or JavaScript",tag:"Core",tagColor:"#5b9cf6"},{label:"Data Structures & Algorithms",tag:"Core",tagColor:"#5b9cf6"},
      {label:"HTML / CSS basics",tag:"Web",tagColor:"#3ecfb0"},{label:"React or Vue",tag:"Web",tagColor:"#3ecfb0"},
      {label:"SQL & database design",tag:"Backend",tagColor:"#a78bfa"},{label:"REST API design",tag:"Backend",tagColor:"#a78bfa"},
      {label:"Git & version control",tag:"Tools",tagColor:"#e0a800"},{label:"Linux command line",tag:"Tools",tagColor:"#e0a800"},
      {label:"Cloud basics (AWS/GCP)",tag:"DevOps",tagColor:"#f06595"},{label:"System Design fundamentals",tag:"Senior",tagColor:"#888"},
    ],
    projects:[
      {title:"Personal Portfolio Website",desc:"HTML/CSS/JS site showcasing your projects, skills, and resume. Deploy on Vercel.",tags:["HTML","CSS","JS"]},
      {title:"REST API + Database App",desc:"Backend app with authentication, CRUD ops, and a SQL database.",tags:["Node/Django","SQL","REST"]},
      {title:"Full-Stack Web App",desc:"React frontend + backend. Blog, e-commerce, or social app.",tags:["React","Backend","Auth"]},
      {title:"DSA Visualiser",desc:"Animate sorting/searching algorithms in the browser. Great for interviews.",tags:["Algorithms","Canvas","JS"]},
    ],
    resources:[
      {icon:"🎓",name:"CS50 by Harvard (edX)",desc:"Best free intro to Computer Science",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://cs50.harvard.edu/x/"},
      {icon:"💡",name:"LeetCode",desc:"Daily DSA practice — aim for 150+ problems before placements",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://leetcode.com/"},
      {icon:"📘",name:"The Odin Project",desc:"Full-stack curriculum, completely free and project-based",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.theodinproject.com/"},
      {icon:"☁️",name:"AWS Cloud Practitioner",desc:"Entry-level cloud cert. Very valuable for placements",badge:"Paid",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://aws.amazon.com/certification/certified-cloud-practitioner/"},
      {icon:"📖",name:"Grokking System Design",desc:"Essential for senior/FAANG interviews",badge:"Paid",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://www.educative.io/courses/grokking-the-system-design-interview"},
    ],
  },
  "Data Scientist": {
    tagline:"Turn raw data into decisions that matter",
    years:[
      {label:"Year 1 — Math & Python",color:"#a78bfa",title:"Build the analytical base",items:["Strengthen Statistics: mean, variance, distributions, hypothesis testing","Learn Python for data — NumPy, Pandas, Matplotlib","Take a free Kaggle micro-course (Intro to ML)","Practice EDA on 2–3 public datasets","Understand spreadsheet analysis deeply"]},
      {label:"Year 2 — ML Fundamentals",color:"#5b9cf6",title:"Learn machine learning",items:["Study supervised learning: regression, classification, decision trees","Master Scikit-learn and build end-to-end ML pipelines","Learn SQL for data extraction — GROUP BY, JOINs, window functions","Complete your first Kaggle competition","Study unsupervised learning: clustering, PCA"]},
      {label:"Year 3 — Deep Learning",color:"#3ecfb0",title:"Go deeper",items:["Learn Deep Learning with TensorFlow or PyTorch","Study NLP basics — text processing, tokenisation, transformers","Land a data science internship","Build a data pipeline using real-world messy data","Learn Tableau or Power BI"]},
      {label:"Year 4 — Specialise & Place",color:"#e0a800",title:"Specialise and launch",items:["Specialise in NLP, Computer Vision, or Time Series","Complete a capstone project showcasing the full DS workflow","Get Google Data Analytics or IBM Data Science certification","Build a portfolio on GitHub + write-ups on Medium/Kaggle","Prep for DS interviews: stats questions, case studies, ML theory"]},
    ],
    skills:[
      {label:"Python (NumPy, Pandas)",tag:"Core",tagColor:"#a78bfa"},{label:"Statistics & Probability",tag:"Core",tagColor:"#a78bfa"},
      {label:"SQL for data extraction",tag:"Data",tagColor:"#5b9cf6"},{label:"Scikit-learn (ML library)",tag:"ML",tagColor:"#3ecfb0"},
      {label:"Data visualisation (Seaborn)",tag:"Viz",tagColor:"#e0a800"},{label:"TensorFlow or PyTorch",tag:"Deep Learning",tagColor:"#f06595"},
      {label:"Jupyter Notebooks workflow",tag:"Tools",tagColor:"#888"},{label:"Feature engineering",tag:"ML",tagColor:"#3ecfb0"},
      {label:"Tableau or Power BI",tag:"BI",tagColor:"#5b9cf6"},{label:"A/B testing",tag:"Advanced",tagColor:"#888"},
    ],
    projects:[
      {title:"EDA & Insight Report",desc:"Pick a Kaggle dataset. Do full EDA, create visuals, write a story.",tags:["Pandas","Seaborn","Kaggle"]},
      {title:"ML Price Predictor",desc:"Predict house/stock prices using regression. Build a Streamlit UI.",tags:["Scikit-learn","Streamlit","Regression"]},
      {title:"Sentiment Analysis App",desc:"Classify tweets or product reviews using NLP. Deploy as a web API.",tags:["NLP","NLTK","Flask"]},
      {title:"End-to-End ML Pipeline",desc:"Data ingestion → cleaning → model → deployment.",tags:["MLflow","Docker","Cloud"]},
    ],
    resources:[
      {icon:"📊",name:"Kaggle Learn",desc:"Free micro-courses on Python, ML, SQL and deep learning",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.kaggle.com/learn"},
      {icon:"🎓",name:"Andrew Ng's ML Specialisation",desc:"The gold standard intro to machine learning",badge:"Audit Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.coursera.org/specializations/machine-learning-introduction"},
      {icon:"📘",name:"fast.ai — Practical Deep Learning",desc:"Top-down, code-first deep learning course",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://course.fast.ai/"},
      {icon:"🏅",name:"IBM Data Science Certificate",desc:"Good for early resume — Coursera professional certificate",badge:"Paid",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://www.coursera.org/professional-certificates/ibm-data-science"},
      {icon:"📖",name:"Hands-On ML (Géron)",desc:"Best textbook for practical ML with Scikit-learn and TensorFlow",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/"},
    ],
  },

  "VLSI / Chip Design Engineer": {
    tagline:"Design the chips that power every device on earth",
    years:[
      {label:"Year 1 — Digital Foundations",color:"#5b9cf6",title:"Build the hardware base",items:["Master Boolean algebra, logic gates, combinational and sequential circuits","Study Number Systems and digital arithmetic thoroughly","Learn Verilog basics — write simple gates, MUXes and flip-flops","Simulate circuits using ModelSim or free tools like EDA Playground","Understand how a CPU works — datapath, control unit, ALU"]},
      {label:"Year 2 — RTL & Verification",color:"#a78bfa",title:"Write and verify real designs",items:["Study SystemVerilog for RTL design and testbench writing","Learn CMOS circuit design — transistor sizing, inverter chains, static timing","Understand design methodologies: FSMs, pipelining, clock domain crossing","Get hands-on with Xilinx Vivado or Intel Quartus (free for students)","Target an FPGA project — implement a UART, VGA controller or RISC-V core"]},
      {label:"Year 3 — EDA Tools & Internship",color:"#3ecfb0",title:"Use industry tools",items:["Learn Synopsys Design Compiler or Cadence Genus for synthesis","Study Physical Design: floorplanning, placement, routing, DRC/LVS","Apply for VLSI/semiconductor internships — TI, Qualcomm, Intel, Synopsys","Complete Static Timing Analysis (STA) — learn PrimeTime concepts","Study low-power design: clock gating, power gating, multi-Vt cells"]},
      {label:"Year 4 — Specialise & Place",color:"#e0a800",title:"Enter the semiconductor industry",items:["Choose a track: Front-End (RTL/Verification) or Back-End (Physical Design)","Build a GitHub portfolio: RISC-V processor, SoC subsystem, or memory controller","Target companies: TI, Qualcomm, Broadcom, AMD, NVIDIA, Intel, Synopsys, Cadence","Prepare for technical interviews: digital design puzzles, timing, STA questions","Consider VLSI-specific certifications from Udemy/VLSIGuru or join NPTEL courses"]},
    ],
    skills:[
      {label:"Verilog / SystemVerilog",tag:"Core",tagColor:"#5b9cf6"},{label:"Digital Logic Design",tag:"Core",tagColor:"#5b9cf6"},
      {label:"CMOS Circuit Design",tag:"Analog",tagColor:"#a78bfa"},{label:"Static Timing Analysis",tag:"Timing",tagColor:"#3ecfb0"},
      {label:"FPGA Development",tag:"Prototyping",tagColor:"#e0a800"},{label:"Logic Synthesis",tag:"EDA",tagColor:"#f06595"},
      {label:"Physical Design (PnR)",tag:"Back-End",tagColor:"#888"},{label:"UVM / Verification",tag:"Verification",tagColor:"#5b9cf6"},
      {label:"Low Power Design",tag:"Advanced",tagColor:"#a78bfa"},{label:"TCL Scripting",tag:"Tools",tagColor:"#888"},
    ],
    projects:[
      {title:"4-bit ALU in Verilog",desc:"Implement a fully verified ALU with testbench on EDA Playground or ModelSim.",tags:["Verilog","ALU","Simulation"]},
      {title:"UART on FPGA",desc:"Build a working UART transmitter/receiver on a Basys3 or DE10-Lite board.",tags:["FPGA","Verilog","Serial Comms"]},
      {title:"RISC-V Processor Core",desc:"Implement a simple 5-stage pipelined RISC-V core. Best portfolio project for VLSI roles.",tags:["RISC-V","Pipeline","RTL"]},
      {title:"STA Timing Report",desc:"Run synthesis + STA on a design using open-source OpenROAD flow and document findings.",tags:["STA","Synthesis","OpenROAD"]},
    ],
    resources:[
      {icon:"📘",name:"Digital Design — Morris Mano",desc:"The gold standard textbook for digital logic and circuit design",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.amazon.in/Digital-Design-Morris-Mano/dp/8131716961"},
      {icon:"🎓",name:"NPTEL VLSI Design (IIT)",desc:"Free IIT course on VLSI — excellent theory foundation",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/117105126"},
      {icon:"💡",name:"EDA Playground",desc:"Free browser-based Verilog/SystemVerilog simulator — start coding today",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.edaplayground.com/"},
      {icon:"🔬",name:"Synopsys University Program",desc:"Free EDA tool licenses for students — Synopsys VCS, DC, PrimeTime",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.synopsys.com/company/university-program.html"},
      {icon:"📐",name:"OpenROAD Project",desc:"Open-source RTL-to-GDS flow — great for learning full chip design flow",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://theopenroadproject.org/"},
    ],
  },

  "Embedded Systems Engineer": {
    tagline:"Write the code that makes hardware come alive",
    years:[
      {label:"Year 1 — C & Microcontrollers",color:"#3ecfb0",title:"Start with the fundamentals",items:["Master C programming — pointers, structs, bit manipulation, memory layout","Get an Arduino Uno or STM32 Nucleo board and start blinking LEDs","Learn how a microcontroller works: GPIO, timers, interrupts, ADC/DAC","Study computer architecture: registers, stack, memory-mapped I/O","Complete a mini project: temperature sensor + LCD display"]},
      {label:"Year 2 — Protocols & RTOS",color:"#5b9cf6",title:"Go deeper into embedded",items:["Master communication protocols: UART, SPI, I2C, CAN, RS-485","Learn FreeRTOS — tasks, queues, semaphores, mutexes","Study ARM Cortex-M architecture — startup code, linker scripts, NVIC","Understand bare-metal vs RTOS design decisions","Build a project: IMU data logger or motor controller with RTOS"]},
      {label:"Year 3 — Linux & Internship",color:"#a78bfa",title:"Move to embedded Linux",items:["Learn Embedded Linux: Yocto/Buildroot, device trees, kernel modules","Get familiar with Raspberry Pi — write kernel drivers","Apply for embedded internships: automotive (Bosch, Denso), consumer electronics, defence","Study bootloaders: U-Boot and bare-metal startup sequences","Learn debugging tools: JTAG, OpenOCD, oscilloscope, logic analyser"]},
      {label:"Year 4 — Specialise & Launch",color:"#e0a800",title:"Choose your domain",items:["Specialise: Automotive (AUTOSAR), Industrial (IEC 61508), IoT, or Medical (IEC 62304)","Build a portfolio project showcasing full product: hardware + firmware + documentation","Target companies: STMicroelectronics, Texas Instruments, Bosch, ISRO, DRDO, Qualcomm","Get certified: ARM Accredited Engineer or Embedded Linux certificate","Learn Rust for embedded — growing rapidly in safety-critical systems"]},
    ],
    skills:[
      {label:"Embedded C / C++",tag:"Core",tagColor:"#3ecfb0"},{label:"Microcontrollers (ARM/AVR/ESP32)",tag:"Core",tagColor:"#3ecfb0"},
      {label:"RTOS (FreeRTOS/Zephyr)",tag:"OS",tagColor:"#5b9cf6"},{label:"UART / SPI / I2C / CAN",tag:"Protocols",tagColor:"#a78bfa"},
      {label:"Embedded Linux",tag:"Linux",tagColor:"#e0a800"},{label:"JTAG Debugging",tag:"Tools",tagColor:"#888"},
      {label:"Makefile / CMake",tag:"Build",tagColor:"#f06595"},{label:"Oscilloscope / Logic Analyser",tag:"Hardware",tagColor:"#888"},
      {label:"Device Drivers",tag:"Advanced",tagColor:"#5b9cf6"},{label:"Power Management",tag:"Advanced",tagColor:"#a78bfa"},
    ],
    projects:[
      {title:"FreeRTOS IMU Logger",desc:"Read IMU data over I2C, log to SD card using FATFS, display on OLED — all with FreeRTOS tasks.",tags:["FreeRTOS","I2C","STM32"]},
      {title:"Custom UART Bootloader",desc:"Write a bootloader from scratch that accepts firmware over UART and flashes it to flash memory.",tags:["Bootloader","UART","Bare Metal"]},
      {title:"Embedded Linux Driver",desc:"Write a Linux kernel character device driver for a GPIO-connected sensor on Raspberry Pi.",tags:["Linux","Kernel Driver","Raspberry Pi"]},
      {title:"Motor Controller",desc:"Implement a PID motor speed controller with encoder feedback on STM32 with CAN communication.",tags:["PID","CAN","STM32"]},
    ],
    resources:[
      {icon:"📘",name:"The Definitive Guide to ARM Cortex-M (Yiu)",desc:"The bible for ARM Cortex-M programming — covers architecture in depth",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.amazon.in/Definitive-Guide-Arm-Cortex-M3-Cortex-M4/dp/0124080820"},
      {icon:"🎓",name:"Fastbit Embedded Brain Academy",desc:"Best practical STM32 and RTOS courses on Udemy",badge:"Paid",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://fastbitlab.com/"},
      {icon:"💡",name:"NPTEL Embedded Systems (IIT)",desc:"Free IIT course covering microcontrollers, RTOS and real-time programming",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/108105102"},
      {icon:"🔧",name:"FreeRTOS Documentation",desc:"Official FreeRTOS docs — read every API description and the kernel internals guide",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.freertos.org/Documentation/RTOS_book.html"},
      {icon:"📐",name:"STM32CubeIDE (Free)",desc:"Official STM32 IDE with HAL — the industry standard development environment",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.st.com/en/development-tools/stm32cubeide.html"},
    ],
  },

  "IoT Engineer": {
    tagline:"Connect the physical world to the digital one",
    years:[
      {label:"Year 1 — Hardware + Python",color:"#a78bfa",title:"Connect your first devices",items:["Get an ESP32 or Raspberry Pi and connect sensors — DHT22, PIR, soil moisture","Learn MicroPython or CircuitPython for rapid prototyping","Understand wireless protocols: WiFi, Bluetooth BLE, Zigbee basics","Build a simple IoT dashboard using Thingspeak or Grafana + InfluxDB","Study networking fundamentals: IP addressing, DNS, HTTP/HTTPS, TCP/UDP"]},
      {label:"Year 2 — Protocols & Cloud",color:"#5b9cf6",title:"Build connected systems",items:["Master MQTT — publish/subscribe, QoS levels, retained messages, broker setup","Learn AWS IoT Core or Azure IoT Hub — connect devices, rules engine, shadows","Implement OTA (Over The Air) firmware updates for ESP32","Study edge computing — running ML models on microcontrollers with TensorFlow Lite","Build a complete IoT product: sensors → MQTT → cloud → dashboard → alerts"]},
      {label:"Year 3 — Security & Scale",color:"#3ecfb0",title:"Build production-grade IoT",items:["Learn IoT security: TLS/DTLS, certificate provisioning, secure boot","Study time-series databases: InfluxDB, TimescaleDB for IoT data storage","Apply for IoT internships — smart home, industrial IoT, agriculture tech companies","Learn Kubernetes/Docker for deploying IoT microservices backends","Study LoRaWAN for long-range, low-power IoT applications"]},
      {label:"Year 4 — Specialise & Launch",color:"#e0a800",title:"Ship IoT products",items:["Specialise: Industrial IoT (IIoT), Smart Home, AgriTech, or Healthcare IoT","Build a full end-to-end IoT product — hardware, firmware, cloud, mobile app","Target companies: Honeywell, Siemens, Bosch IoT, Jio IoT, Amazon, startups","Get AWS IoT Specialty or Google Cloud IoT certification","Document your product with proper technical documentation and API specs"]},
    ],
    skills:[
      {label:"ESP32 / Raspberry Pi",tag:"Hardware",tagColor:"#a78bfa"},{label:"MQTT Protocol",tag:"Protocol",tagColor:"#5b9cf6"},
      {label:"Embedded C / MicroPython",tag:"Firmware",tagColor:"#3ecfb0"},{label:"AWS IoT / Azure IoT",tag:"Cloud",tagColor:"#e0a800"},
      {label:"Node-RED / Grafana",tag:"Dashboards",tagColor:"#f06595"},{label:"LoRaWAN / BLE / Zigbee",tag:"Wireless",tagColor:"#888"},
      {label:"Docker & Microservices",tag:"Backend",tagColor:"#5b9cf6"},{label:"IoT Security (TLS/PKI)",tag:"Security",tagColor:"#a78bfa"},
      {label:"Time-series Databases",tag:"Data",tagColor:"#3ecfb0"},{label:"OTA Updates",tag:"DevOps",tagColor:"#888"},
    ],
    projects:[
      {title:"Smart Home Dashboard",desc:"ESP32 sensors → MQTT → Node-RED → Grafana dashboard with mobile alerts.",tags:["ESP32","MQTT","Grafana"]},
      {title:"Industrial Sensor Monitor",desc:"Modbus RTU sensor → ESP32 → AWS IoT Core → real-time anomaly alerts.",tags:["Modbus","AWS IoT","Alerts"]},
      {title:"LoRaWAN Weather Station",desc:"Battery-powered outdoor station with LoRa → TTN → cloud storage → public dashboard.",tags:["LoRa","TTN","Low Power"]},
      {title:"TinyML on Microcontroller",desc:"Deploy a gesture recognition model with TensorFlow Lite on an Arduino Nano 33 BLE.",tags:["TinyML","TF Lite","BLE"]},
    ],
    resources:[
      {icon:"🎓",name:"NPTEL IoT (IIT Kharagpur)",desc:"Comprehensive free IoT course covering protocols, cloud and security",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/106105166"},
      {icon:"☁️",name:"AWS IoT Core (Free Tier)",desc:"Hands-on practice with real AWS IoT services — 250k messages/month free",badge:"Free Tier",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://aws.amazon.com/iot-core/"},
      {icon:"💡",name:"Random Nerd Tutorials",desc:"Best practical ESP32/Arduino IoT project tutorials on the internet",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://randomnerdtutorials.com/"},
      {icon:"📘",name:"Designing Connected Products (O'Reilly)",desc:"Practical guide to IoT product design covering UX, hardware, cloud and security",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.oreilly.com/library/view/designing-connected-products/9781449368495/"},
      {icon:"🔧",name:"Node-RED",desc:"Flow-based visual programming tool — perfect for rapid IoT prototyping",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nodered.org/"},
    ],
  },

  "Signal Processing Engineer": {
    tagline:"Extract meaning from the noise of the world",
    years:[
      {label:"Year 1 — Signals & Math",color:"#f06595",title:"Build the mathematical foundation",items:["Master Signals & Systems — Fourier Series, Fourier Transform, Laplace Transform","Study probability and random processes deeply","Learn MATLAB basics — plotting, matrix ops, signal generation and filtering","Understand sampling theorem, aliasing and reconstruction","Complete exercises from Oppenheim's Signals & Systems textbook"]},
      {label:"Year 2 — DSP Core",color:"#e0a800",title:"Learn digital signal processing",items:["Study Discrete Fourier Transform (DFT/FFT) and its applications","Design digital filters: FIR and IIR, windowing methods, bilinear transform","Implement DSP algorithms in MATLAB and Python (NumPy/SciPy)","Study multirate signal processing — decimation, interpolation, polyphase filters","Build a spectrum analyser or audio equaliser project in MATLAB"]},
      {label:"Year 3 — Applications & Internship",color:"#3ecfb0",title:"Apply to real domains",items:["Choose a domain: Audio DSP, Communications (5G), Radar/SONAR, Medical Imaging","Learn FPGA implementation of DSP algorithms using Xilinx HLS or VHDL","Study communications: modulation, OFDM, channel estimation, MIMO","Apply for internships: ISRO, DRDO, Samsung, Qualcomm, Dolby, Texas Instruments","Implement a communication system: BPSK/QPSK modulator/demodulator in MATLAB"]},
      {label:"Year 4 — Specialise & Research",color:"#5b9cf6",title:"Push into research or industry",items:["Publish or present a paper on DSP — IIT conferences, IEEE Signal Processing Society","Pursue M.Tech/MS if targeting research or advanced roles at ISRO/DRDO/academia","Get certified in MATLAB Signal Processing Toolbox or Simulink","Target companies: Qualcomm, Texas Instruments, ISRO, Samsung, Dolby, Apple (audio)","Consider deep learning for signal processing: CNNs on spectrograms, speech recognition"]},
    ],
    skills:[
      {label:"MATLAB / Simulink",tag:"Core",tagColor:"#f06595"},{label:"Python (NumPy/SciPy/Librosa)",tag:"Core",tagColor:"#f06595"},
      {label:"DSP Theory (FFT/Filters)",tag:"Theory",tagColor:"#e0a800"},{label:"FPGA DSP Implementation",tag:"Hardware",tagColor:"#5b9cf6"},
      {label:"Communications Systems",tag:"Domain",tagColor:"#a78bfa"},{label:"Statistical Signal Processing",tag:"Advanced",tagColor:"#888"},
      {label:"Verilog / VHDL",tag:"RTL",tagColor:"#3ecfb0"},{label:"C DSP (fixed-point arithmetic)",tag:"Embedded",tagColor:"#888"},
      {label:"Audio / RF / Radar Systems",tag:"Domain",tagColor:"#f06595"},{label:"Deep Learning for Signals",tag:"Emerging",tagColor:"#5b9cf6"},
    ],
    projects:[
      {title:"Audio Equaliser in MATLAB",desc:"Implement a parametric EQ with FIR/IIR filters. Plot frequency response and demonstrate on real audio.",tags:["MATLAB","FIR/IIR","Audio"]},
      {title:"OFDM Simulator",desc:"Simulate a basic OFDM communication system — modulation, channel, equalization, BER curve.",tags:["OFDM","MATLAB","Communications"]},
      {title:"FPGA FFT Accelerator",desc:"Implement a 256-point FFT on an FPGA using Xilinx IP or custom VHDL and verify output.",tags:["FPGA","FFT","VHDL"]},
      {title:"Speech Denoising with Deep Learning",desc:"Train a CNN on spectrograms to denoise speech — practical ML + DSP fusion project.",tags:["Deep Learning","Spectrogram","Python"]},
    ],
    resources:[
      {icon:"📘",name:"Signals & Systems — Oppenheim & Willsky",desc:"The definitive textbook — every signal processing engineer has read this",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.amazon.in/Signals-Systems-2e-Oppenheim/dp/0138147574"},
      {icon:"🎓",name:"NPTEL Digital Signal Processing (IIT)",desc:"Free IIT course — comprehensive theory and MATLAB exercises",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/117101099"},
      {icon:"💡",name:"MathWorks MATLAB (Student License)",desc:"Get a free or discounted student license through your college",badge:"Student",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://in.mathworks.com/academia/student-license.html"},
      {icon:"📡",name:"DSPRelated.com",desc:"Excellent free articles and tutorials on practical DSP — especially filter design",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.dsprelated.com/"},
      {icon:"🏅",name:"IEEE Signal Processing Society",desc:"Join as a student member for access to journals, conferences and networking",badge:"Student",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://signalprocessingsociety.org/"},
    ],
  },

  "Hardware / PCB Design Engineer": {
    tagline:"Turn circuits from schematics into real hardware",
    years:[
      {label:"Year 1 — Circuit Theory",color:"#e0a800",title:"Strengthen circuit fundamentals",items:["Master Network Analysis: KVL, KCL, Thevenin, Norton, Superposition","Study Op-Amp circuits: amplifiers, comparators, integrators, active filters","Learn semiconductor devices deeply: diodes, BJT, MOSFET, their models","Get hands-on: build circuits on breadboard and verify with multimeter/oscilloscope","Take NPTEL Network Theory or Circuits & Systems course"]},
      {label:"Year 2 — PCB Design",color:"#a78bfa",title:"Design your first PCBs",items:["Learn KiCad (free) or EasyEDA — schematic capture, BOM, PCB layout","Understand PCB design rules: trace width, via sizing, clearances, impedance control","Study power supply design: linear regulators, buck/boost converters","Design, fabricate and test a PCB — use JLCPCB or PCBWay (very affordable)","Learn Altium Designer basics — widely used in industry"]},
      {label:"Year 3 — Signal Integrity & Internship",color:"#3ecfb0",title:"Build production-grade hardware",items:["Study signal integrity: transmission lines, reflections, crosstalk, termination","Learn EMI/EMC design: ground planes, decoupling, shielding, filtering","Apply for hardware internships: consumer electronics, EV companies, defence electronics","Study high-speed design: DDR memory routing, USB, PCIe layout guidelines","Practice with SPICE simulation: LTspice (free) for circuit verification before building"]},
      {label:"Year 4 — Specialise & Launch",color:"#5b9cf6",title:"Enter hardware engineering",items:["Choose a specialisation: RF/Antenna design, Power Electronics, High-Speed Digital","Build a portfolio: 3–4 complete PCB projects on GitHub with schematics and gerbers","Target companies: Texas Instruments, Analog Devices, Samsung, Apple, EV startups, DRDO","Study IPC standards: IPC-2221 (PCB design), IPC-A-610 (assembly quality)","Get certified: IPC Designer Certification or Altium Designer Certification"]},
    ],
    skills:[
      {label:"KiCad / Altium Designer",tag:"Core",tagColor:"#e0a800"},{label:"Schematic Capture",tag:"Core",tagColor:"#e0a800"},
      {label:"PCB Layout & Routing",tag:"Design",tagColor:"#a78bfa"},{label:"Power Supply Design",tag:"Analog",tagColor:"#3ecfb0"},
      {label:"Signal Integrity Analysis",tag:"Advanced",tagColor:"#5b9cf6"},{label:"EMI / EMC Design",tag:"Advanced",tagColor:"#888"},
      {label:"LTspice / SPICE Simulation",tag:"Simulation",tagColor:"#f06595"},{label:"Oscilloscope & Lab Equipment",tag:"Hardware",tagColor:"#888"},
      {label:"IPC Standards",tag:"Professional",tagColor:"#a78bfa"},{label:"BOM & Supply Chain",tag:"Production",tagColor:"#e0a800"},
    ],
    projects:[
      {title:"Arduino Shield PCB",desc:"Design a custom Arduino shield with sensors, connectors and power regulation. Fabricate and test.",tags:["KiCad","PCB","Fabrication"]},
      {title:"Buck Converter Module",desc:"Design and build a synchronous buck converter with >90% efficiency. Document efficiency curves.",tags:["Power Electronics","Buck Converter","Testing"]},
      {title:"Raspberry Pi HAT",desc:"Design a professional Raspberry Pi HAT with I2C sensors, GPIO protection and proper HAT EEPROM.",tags:["Raspberry Pi","HAT","I2C"]},
      {title:"High-Speed USB 3.0 Board",desc:"Design a USB 3.0 circuit with proper impedance control, length matching and signal integrity.",tags:["USB 3.0","Signal Integrity","High-Speed"]},
    ],
    resources:[
      {icon:"🔧",name:"KiCad EDA (Free)",desc:"Professional-grade open-source PCB design tool — used in industry and academia",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.kicad.org/"},
      {icon:"💡",name:"Phil's Lab (YouTube)",desc:"Best practical PCB design and hardware engineering channel — watch every video",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.youtube.com/@PhilsLab"},
      {icon:"🎓",name:"NPTEL Analog Circuits (IIT)",desc:"Free IIT course on analog circuit design — essential for hardware engineers",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/108105157"},
      {icon:"📐",name:"LTspice (Free)",desc:"Analog Devices' free SPICE simulator — industry standard for circuit simulation",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html"},
      {icon:"🏭",name:"JLCPCB",desc:"Fabricate your PCB designs for ₹200–400 — best value PCB manufacturer for students",badge:"Paid",bc:"rgba(224,168,0,0.15)",bt:"#c98f00",url:"https://jlcpcb.com/"},
    ],
  },

  "Control Systems / Robotics Engineer": {
    tagline:"Build machines that sense, decide and act",
    years:[
      {label:"Year 1 — Math & Control Theory",color:"#63c654",title:"Master the fundamentals",items:["Study Laplace Transforms, Transfer Functions and Block Diagram Algebra","Learn classical control: PID controllers, root locus, Bode and Nyquist plots","Get hands-on with MATLAB Control Systems Toolbox and Simulink","Simulate a DC motor control system — model, design PID, verify step response","Study NPTEL Control Systems course from IIT Bombay or Madras"]},
      {label:"Year 2 — Modern Control & Robotics",color:"#5b9cf6",title:"Go beyond classical control",items:["Learn state-space representation — controllability, observability, pole placement","Study digital control systems: z-domain, discrete PID, ZOH equivalent","Start robotics: kinematics (forward/inverse), Denavit-Hartenberg parameters","Learn ROS (Robot Operating System) — nodes, topics, services, launch files","Build a robot arm simulation in ROS + Gazebo or a line-following robot"]},
      {label:"Year 3 — Autonomous Systems & Internship",color:"#a78bfa",title:"Work on real robots",items:["Study path planning: A*, Dijkstra, RRT for mobile robots","Learn SLAM (Simultaneous Localisation and Mapping) using ROS","Apply for internships: ISRO, DRDO, Tata Motors (ADAS), startups in AgriRobotics","Implement sensor fusion: Kalman filter combining IMU + encoder + GPS","Learn computer vision for robotics: OpenCV, object detection for grasping"]},
      {label:"Year 4 — Specialise & Launch",color:"#e0a800",title:"Enter the robotics industry",items:["Choose a track: Industrial Automation, Autonomous Vehicles, Space Robotics, or Surgical Robots","Build a capstone: autonomous differential drive robot with SLAM and path planning","Target companies: Tata Motors (ADAS), ISRO, Bosch, ABB, FANUC, ROS-Industrial","Consider M.Tech/MS in Control or Robotics for research-oriented roles","Get certified: ROS Developer Certificate or MATLAB Robotics Toolbox certification"]},
    ],
    skills:[
      {label:"Control Theory (PID/LQR/MPC)",tag:"Core",tagColor:"#63c654"},{label:"MATLAB / Simulink",tag:"Core",tagColor:"#63c654"},
      {label:"ROS / ROS2",tag:"Robotics",tagColor:"#5b9cf6"},{label:"Sensor Fusion (Kalman Filter)",tag:"Estimation",tagColor:"#a78bfa"},
      {label:"C++ for Robotics",tag:"Programming",tagColor:"#3ecfb0"},{label:"Python (NumPy/OpenCV)",tag:"Programming",tagColor:"#3ecfb0"},
      {label:"Embedded Control (STM32/Arduino)",tag:"Hardware",tagColor:"#e0a800"},{label:"Path Planning & SLAM",tag:"Autonomy",tagColor:"#888"},
      {label:"Computer Vision (OpenCV)",tag:"Perception",tagColor:"#f06595"},{label:"Gazebo / RViz Simulation",tag:"Tools",tagColor:"#888"},
    ],
    projects:[
      {title:"PID Motor Controller",desc:"Design and implement a digital PID speed controller for a DC motor with encoder feedback on STM32.",tags:["PID","STM32","Control"]},
      {title:"2-DOF Robot Arm Simulation",desc:"Model a 2-link planar robot arm in MATLAB/Simulink with inverse kinematics and trajectory planning.",tags:["Kinematics","MATLAB","ROS"]},
      {title:"Autonomous Line Follower + Obstacle Avoidance",desc:"Build a robot that follows a line using PID and avoids obstacles using ultrasonic sensors.",tags:["PID","Sensors","Embedded"]},
      {title:"Mobile Robot with SLAM",desc:"Implement gmapping or Cartographer SLAM on a Raspberry Pi robot with a LiDAR sensor using ROS.",tags:["ROS","SLAM","LiDAR"]},
    ],
    resources:[
      {icon:"📘",name:"Modern Control Engineering — Ogata",desc:"The most widely used textbook for control systems — clear and example-rich",badge:"Book",bc:"rgba(167,139,250,0.15)",bt:"#7c5cd6",url:"https://www.amazon.in/Modern-Control-Engineering-Katsuhiko-Ogata/dp/0136156738"},
      {icon:"🎓",name:"NPTEL Control Systems (IIT Bombay)",desc:"Comprehensive free IIT course — theory and MATLAB from the best faculty",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://nptel.ac.in/courses/107101093"},
      {icon:"🤖",name:"ROS Documentation & Tutorials",desc:"Official ROS tutorials — work through all beginner and intermediate sections",badge:"Free",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://docs.ros.org/en/humble/"},
      {icon:"💡",name:"The Construct (ROS Courses)",desc:"Hands-on ROS courses and Gazebo simulation environment — best practical robotics training",badge:"Freemium",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.theconstruct.ai/"},
      {icon:"📐",name:"MATLAB Robotics Toolbox (Free for Students)",desc:"Complete robotics simulation including kinematics, dynamics and control in MATLAB",badge:"Student",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://in.mathworks.com/academia/student-license.html"},
    ],
  },
};

export const DEFAULT_ROADMAP = {
  tagline:"Chart your own unique path",
  years:[
    {label:"Year 1 — Explore",color:"#5b9cf6",title:"Discover your strengths",items:["Talk to 5 professionals in your chosen field","Take online courses to confirm your interest","Read books and biographies from leaders in the field","Join a college club related to your interest area"]},
    {label:"Year 2 — Build",color:"#3ecfb0",title:"Develop core skills",items:["Focus on the technical skills most valued in your field","Seek a part-time role or volunteer position","Start building a portfolio or evidence of your work","Find a mentor through college networks or LinkedIn"]},
    {label:"Year 3 — Apply",color:"#a78bfa",title:"Get real experience",items:["Secure an internship in your field","Work on a significant independent project","Begin networking at industry events","Seek certifications that employers value"]},
    {label:"Year 4 — Launch",color:"#e0a800",title:"Enter your career",items:["Apply for entry-level positions with confidence","Leverage your college alumni network","Publish or present your best work publicly","Set 1-year, 3-year, and 5-year career goals"]},
  ],
  skills:[
    {label:"Communication & presentation",tag:"Universal",tagColor:"#5b9cf6"},
    {label:"Critical thinking",tag:"Universal",tagColor:"#5b9cf6"},
    {label:"Time management",tag:"Universal",tagColor:"#3ecfb0"},
    {label:"Networking & relationship building",tag:"Career",tagColor:"#a78bfa"},
    {label:"Writing & documentation",tag:"Career",tagColor:"#e0a800"},
  ],
  projects:[
    {title:"Personal Portfolio",desc:"Document your work, skills, and projects in one presentable place.",tags:["Branding","Showcase"]},
    {title:"Independent Research Project",desc:"Deep-dive into a topic in your field and write a report.",tags:["Research","Writing"]},
  ],
  resources:[
    {icon:"📘",name:"LinkedIn Learning",desc:"Broad library of professional courses",badge:"Freemium",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.linkedin.com/learning/"},
    {icon:"🎓",name:"Coursera",desc:"University-grade courses — audit for free",badge:"Free Audit",bc:"rgba(62,207,176,0.15)",bt:"#0e9e83",url:"https://www.coursera.org/"},
  ],
};
