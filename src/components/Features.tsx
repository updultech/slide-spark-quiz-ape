
import { BookOpen, BrainCircuit, FileUp, Award, Certificate, Users } from "lucide-react";

const features = [
  {
    icon: <FileUp className="h-8 w-8 text-ape-purple" />,
    title: "Slide Upload",
    description: "Easily upload your presentation slides in various formats including PPT, PDF, and more."
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-ape-purple" />,
    title: "AI Question Generation",
    description: "Our AI analyzes your slides and generates relevant questions to test your knowledge."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-ape-purple" />,
    title: "Interactive Quizzes",
    description: "Take quizzes based on your slides with different question types and difficulty levels."
  },
  {
    icon: <Award className="h-8 w-8 text-ape-purple" />,
    title: "Blockchain Rewards",
    description: "Earn ApeTokens for completing quizzes and achieving high scores on the platform."
  },
  {
    icon: <Certificate className="h-8 w-8 text-ape-purple" />,
    title: "NFT Certificates",
    description: "Mint verifiable certificates as NFTs on the ApeChain blockchain upon course completion."
  },
  {
    icon: <Users className="h-8 w-8 text-ape-purple" />,
    title: "Community Learning",
    description: "Share slides, quizzes, and achievements with other students in your learning community."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-ape-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
          <p className="text-gray-600 mt-2">Discover what makes ApePrepQuiz the ultimate study companion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="h-12 w-12 bg-ape-purple/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
