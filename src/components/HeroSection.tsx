
import { ArrowRight, BookOpen, Upload, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-ape-purple/10 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your <span className="text-ape-purple">Study Experience</span> with Blockchain Rewards
            </h1>
            <p className="text-lg text-gray-600">
              Upload your slides, generate AI-powered questions, take quizzes, and earn ApeTokens 
              to mint verifiable certificates on the blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/upload">
                <Button className="bg-ape-purple hover:bg-ape-dark-purple w-full sm:w-auto">
                  Upload Slides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="w-full sm:w-auto">
                  Browse Courses
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-ape-purple" />
                </div>
                <span className="font-medium">Upload Slides</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-ape-purple" />
                </div>
                <span className="font-medium">Take Quizzes</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-10 w-10 rounded-full bg-ape-purple/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-ape-purple" />
                </div>
                <span className="font-medium">Earn Tokens</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-full h-[400px] bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 relative z-10">
              <div className="bg-ape-purple h-12 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
                <div className="pt-4">
                  <div className="h-8 bg-ape-purple/20 w-32 rounded-md"></div>
                </div>
                <div className="space-y-2 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-ape-light-purple"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-ape-light-purple"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-ape-light-purple"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-ape-light-purple/20 rounded-full z-0 animate-pulse-light"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ape-light-purple/10 rounded-full z-0 animate-float"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
