
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Upload Your Slides",
    description: "Upload your presentation slides in PDF, PPT, or other formats to the platform."
  },
  {
    number: "02",
    title: "AI Generates Questions",
    description: "Our AI analyzes your slides and automatically generates relevant quiz questions."
  },
  {
    number: "03",
    title: "Take Quizzes",
    description: "Practice with the generated quizzes to test your knowledge and prepare for exams."
  },
  {
    number: "04",
    title: "Earn ApeTokens",
    description: "Earn blockchain tokens for completing quizzes and achieving high scores."
  },
  {
    number: "05",
    title: "Mint Certificates",
    description: "Use your earned tokens to mint NFT certificates upon course completion."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 mt-2">Simple steps to revolutionize your study experience</p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-3'}`}>
                  <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <span className="text-5xl font-bold text-ape-purple/20">{step.number}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-2">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-16 relative flex justify-center md:order-2">
                  <div className="w-10 h-10 rounded-full bg-ape-purple flex items-center justify-center shadow-lg z-10">
                    {index < steps.length - 1 ? (
                      <ArrowRight className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white font-bold">✓</span>
                    )}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1 md:text-right'}`}>
                  {/* Empty space for alignment */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
