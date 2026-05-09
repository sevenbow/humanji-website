// pages/index.js - Next.js Home Page
export default function Home() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HumanJi Research Lab</title>
    <meta name="description" content="Studying the squeeze between rising AI capability and shrinking human oversight windows">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="bg-gray-50">
    <header class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold">HumanJi Research Lab</div>
            <div class="space-x-6">
                <a href="#research" class="hover:text-gray-200">Research</a>
                <a href="#projects" class="hover:text-gray-200">Projects</a>
                <a href="https://github.com/sevenbow" class="hover:text-gray-200">GitHub</a>
            </div>
        </nav>
        <div class="container mx-auto px-6 py-16 text-center">
            <h1 class="text-5xl font-bold mb-6">Studying the AI Oversight Squeeze</h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                10 autonomous research projects exploring how humans oversee increasingly capable AI systems.
                Empirical studies in cognitive load, trust calibration, interface design, and deferral strategies.
            </p>
            <div class="flex justify-center space-x-4">
                <a href="#projects" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">View Research</a>
                <a href="https://github.com/sevenbow" class="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">GitHub Org</a>
            </div>
        </div>
    </header>

    <section class="py-16">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div class="text-4xl font-bold text-blue-600">10</div>
                    <div class="text-gray-600 mt-2">Projects Completed</div>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div class="text-4xl font-bold text-green-600">2</div>
                    <div class="text-gray-600 mt-2">Papers Ready</div>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div class="text-4xl font-bold text-purple-600">780+</div>
                    <div class="text-gray-600 mt-2">Lines of Analysis Code</div>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div class="text-4xl font-bold text-red-600">5</div>
                    <div class="text-gray-600 mt-2">Autonomous Agents</div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-12">Research Projects</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="https://github.com/sevenbow/humanji-cognitive-load-thresholds" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Cognitive Load Thresholds</h3>
                    <p class="text-sm text-gray-600">7±2 simultaneous decision threshold identified</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-trust-calibration-dynamics" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Trust Calibration Dynamics</h3>
                    <p class="text-sm text-gray-600">Trust recovery patterns after AI errors mapped</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-attention-allocation-pressure" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Attention Allocation Pressure</h3>
                    <p class="text-sm text-gray-600">Optimal switching algorithms for multi-AI oversight</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-learning-curves-oversight" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Learning Curves Oversight</h3>
                    <p class="text-sm text-gray-600">780-line Python framework for bias analysis</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-interface-design-understanding" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2 text-blue-600">Interface Design for Understanding</h3>
                    <p class="text-sm text-gray-600">⭐ 476-line academic paper + 5 design dimensions</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-optimal-deferral-strategies" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Optimal Deferral Strategies</h3>
                    <p class="text-sm text-gray-600">15%+ improvement over baseline algorithms</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-temporal-oversight-dynamics" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Temporal Dynamics</h3>
                    <p class="text-sm text-gray-600">Oversight fatigue patterns + timing optimization</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-cross-domain-transfer" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Cross-Domain Transfer</h3>
                    <p class="text-sm text-gray-600">Transferable oversight competencies identified</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-collective-oversight-patterns" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2">Collective Oversight Patterns</h3>
                    <p class="text-sm text-gray-600">Optimal team size = 3-4 for complex decisions</p>
                </a>
                <a href="https://github.com/sevenbow/humanji-metacognitive-awareness" class="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                    <h3 class="font-semibold mb-2 text-blue-600">Metacognitive Awareness</h3>
                    <p class="text-sm text-gray-600">⭐⭐ 426-line paper ready for journal submission</p>
                </a>
            </div>
        </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold mb-8">Core Research Vision</h2>
            <div class="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                <p class="text-lg text-gray-700 leading-relaxed italic mb-6">
                    "AI is automating more and more cognitive decisions, and the trend is accelerating. 
                    What remains for humans are limited windows of oversight — windows that must do two things at once: 
                    steer the present trajectory of autonomous agents, and build the understanding we will need to 
                    oversee them at all in the future."
                </p>
                <div class="text-sm text-gray-500">— Himanshu Mittal, Principal Investigator</div>
            </div>
        </div>
    </section>

    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6 text-center">
            <p>HumanJi Research Lab © 2026 — Advancing AI safety through empirical research</p>
            <p class="text-sm opacity-75 mt-2">humanji.in | github.com/sevenbow</p>
        </div>
    </footer>
</body>
</html>
`
}