{{-- Hero Component for DigiMeta007 --}}
@props([
    'title' => 'Digital Excellence, Engineered for Growth',
    'subtitle' => 'digimeta007 — Licensed Digital Innovation Company. Digital Marketing • Full-Stack Web Development • Business Automation',
    'ctaPrimary' => ['label' => 'Request Private Consultation', 'href' => '#contact'],
    'ctaSecondary' => ['label' => 'Explore Our Capabilities', 'href' => '#services'],
    'stats' => [
        ['label' => 'Projects Completed', 'value' => '50+'],
        ['label' => 'Automations Delivered', 'value' => '20+'],
        ['label' => 'Client Satisfaction', 'value' => '100%']
    ]
])

<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[#081024] text-white">
    {{-- Background - futuristic waves SVG --}}
    <div aria-hidden="true" class="absolute inset-0 -z-10" style="transform: translateZ(0)">
        <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stop-color="#071126" stop-opacity="1" />
                    <stop offset="1" stop-color="#001029" stop-opacity="1" />
                </linearGradient>
                <linearGradient id="waveGrad" x1="0" x2="1">
                    <stop offset="0" stop-color="#00d4ff" stop-opacity="0.18" />
                    <stop offset="0.5" stop-color="#7c5cff" stop-opacity="0.12" />
                    <stop offset="1" stop-color="#00ffd1" stop-opacity="0.08" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="18" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#g1)"></rect>
            
            <g opacity="0.06" transform="translate(0,0)">
                <circle cx="220" cy="80" r="2" fill="#fff" />
                <circle cx="490" cy="30" r="1.5" fill="#fff" />
                <circle cx="870" cy="50" r="1.8" fill="#fff" />
                <circle cx="1240" cy="20" r="1.2" fill="#fff" />
            </g>
            
            <g class="waveGroup" transform="translate(0,380)">
                <path d="M0,160 C240,80 480,240 720,200 C960,160 1200,80 1440,160 L1440 800 L0 800 Z" 
                      fill="url(#waveGrad)" filter="url(#glow)" opacity="0.85"/>
                <path d="M0,190 C240,120 480,260 720,220 C960,180 1200,120 1440,190 L1440 800 L0 800 Z" 
                      fill="#071b2b" opacity="0.25"/>
            </g>
            
            <g opacity="0.06" stroke="#37f0ff" stroke-width="0.8">
                <path d="M0 520 L1440 520" />
                <path d="M0 440 L1440 440" />
                <path d="M0 600 L1440 600" />
            </g>
        </svg>
    </div>

    {{-- Top overlay --}}
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 pointer-events-none -z-5"></div>

    <div class="relative px-6 sm:px-10 lg:px-20 py-20 lg:py-28 max-w-7xl mx-auto">
        <div class="max-w-3xl">
            <p class="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#7c5cff]/20 text-[#00e6ff] text-sm font-medium mb-4">
                Licensed · Enterprise-grade · Results-driven
            </p>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                {{ $title }}
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
                {{ $subtitle }}
            </p>

            <div class="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="{{ $ctaPrimary['href'] }}" 
                   class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#7c5cff] px-6 py-3 text-sm font-semibold shadow-xl hover:scale-105 transform transition">
                    {{ $ctaPrimary['label'] }}
                </a>
                <a href="{{ $ctaSecondary['href'] }}" 
                   class="inline-flex items-center justify-center rounded-2xl border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200/90 hover:bg-slate-800/60 transition">
                    {{ $ctaSecondary['label'] }}
                </a>
            </div>

            {{-- Value props --}}
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex gap-4 items-start">
                    <div class="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-tr from-[#00d4ff]/20 to-[#7c5cff]/20 flex items-center justify-center text-[#00e6ff] font-bold">
                        ✓
                    </div>
                    <div>
                        <h4 class="font-semibold">Enterprise-Level Security</h4>
                        <p class="mt-1 text-sm text-slate-300/80">
                            Arsitektur aman & praktik terbaik untuk data dan performa.
                        </p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <div class="shrink-0 w-12 h-12 rounded-lg bg-gradient-to-tr from-[#00d4ff]/20 to-[#7c5cff]/20 flex items-center justify-center text-[#00e6ff] font-bold">
                        ⚡
                    </div>
                    <div>
                        <h4 class="font-semibold">Automations That Scale</h4>
                        <p class="mt-1 text-sm text-slate-300/80">
                            Workflow & sistem otomatis untuk mempercepat operasi dan mengurangi biaya.
                        </p>
                    </div>
                </div>
            </div>

            {{-- Stats --}}
            <div class="mt-10 flex flex-wrap gap-6">
                @foreach($stats as $stat)
                    <div class="min-w-[150px] bg-white/5 rounded-xl px-4 py-3">
                        <div class="text-2xl font-bold">{{ $stat['value'] }}</div>
                        <div class="text-sm text-slate-300">{{ $stat['label'] }}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <style>
        .waveGroup {
            animation: waveFloat 16s linear infinite;
        }
        @keyframes waveFloat {
            0% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(-40px) translateY(-6px); }
            100% { transform: translateX(0) translateY(0); }
        }
        section:hover .waveGroup {
            animation-duration: 10s;
        }
    </style>
</section>
