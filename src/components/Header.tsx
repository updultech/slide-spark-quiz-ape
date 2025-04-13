
import { Bell, HelpCircle, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-ape-purple flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-bold text-xl text-ape-dark-gray hidden sm:block">
              ApePrepQuiz
            </span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="font-medium hover:text-ape-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/courses" className="font-medium hover:text-ape-purple transition-colors">
            Courses
          </Link>
          <Link to="/quizzes" className="font-medium hover:text-ape-purple transition-colors">
            Quizzes
          </Link>
          <Link to="/rewards" className="font-medium hover:text-ape-purple transition-colors">
            Rewards
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Wallet</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-2">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            <Link to="/dashboard" className="py-2 hover:bg-gray-100 rounded-md px-3">
              Dashboard
            </Link>
            <Link to="/courses" className="py-2 hover:bg-gray-100 rounded-md px-3">
              Courses
            </Link>
            <Link to="/quizzes" className="py-2 hover:bg-gray-100 rounded-md px-3">
              Quizzes
            </Link>
            <Link to="/rewards" className="py-2 hover:bg-gray-100 rounded-md px-3">
              Rewards
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
