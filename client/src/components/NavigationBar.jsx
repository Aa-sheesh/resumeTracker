import React, { useEffect, useState } from "react";
import { LogIn, FileText, LogOut, User } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";
import useUserStore from "@/stores/userStore";
import { Link } from "react-router-dom";

import { DropdownMenu,DropdownMenuItem,DropdownMenuContent,DropdownMenuTrigger } from "@/components/ui/dropdown-menu.jsx";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const API = import.meta.env.VITE_API_URL;




function NavigationBar() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const setUserStore = useUserStore((state) => state.setUser);
  

  useEffect(() => {
    // Check auth on mount
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API}/auth/profile`, {
          withCredentials: true,
        });
        setUser(response.data);
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${API}/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      toast.success("Login successful!");
      setAuthenticated(true);
      setUser(response.data.user || {}); // Use response.data.user if returned
      setUserStore(response.data.user || {}); // Set user in store
      localStorage.setItem("user-storage", JSON.stringify(response.data.user || {})); // Store user in local storage
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed!");
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        `${API}/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      toast.success("Signup successful!");
      setAuthenticated(true);
      setUser(response.data.user || {});
      setUserStore(response.data.user || {}); // Set user in store
      localStorage.setItem("user-storage", JSON.stringify(response.data.user || {})); // Store user in local storage
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed!");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API}/auth/logout`, {}, { withCredentials: true });
      toast.success("Logout successful!");
      setAuthenticated(false);
      setUser({});
      setUserStore(null); // Clear user store
      localStorage.removeItem("user-storage"); // Clear local storage
      //refresh the page to remove user data from the UI
      window.location.reload();
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <nav className="flex px-[8vw] py-[2.5vh] justify-between items-center border-b-2">
      <Link to='/' className="flex items-center cursor-pointer">
        <FileText className="text-[rgb(13,148,136)] h-8 w-8" />
        <div className="font-bold text-xl px-1">Resume Tracker</div>
      </Link>

      {authenticated ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/profile" className="flex items-center gap-2 font-normal">
                <Button variant={`transparent `} className="flex items-center gap-2 font-normal">
                <User /> Profile
                </Button> 
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button onClick={handleLogout} variant={`transparent `} className="flex items-center gap-2 font-normal">
                <LogOut/> Logout 
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center bg-[#051538] hover:bg-[#28385d] text-white text-sm font-medium">
              <LogIn className="mr-1" />
              Sign In
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Resume Tracker</DialogTitle>
              <DialogDescription>
                Sign in or create an account to manage your resumes and track
                job applications.
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-500/10">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Signup</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Log in</CardTitle>
                    <CardDescription>Log in to your account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleLogin}>Log in</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>
                      Make an account to get started.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="signup-username">Username</Label>
                      <Input
                        id="signup-username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSignup}>Sign Up</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </nav>
  );
}

export default NavigationBar;
