import React from "react";
import { LogIn, FileText } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function NavigationBar() {
  return (
    <>
      <nav className="flex px-[4vw] py-[2vh] justify-between items-center border-b-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <FileText className="text-[rgb(13,148,136)] h-8 w-8" />
          <div className="font-bold text-xl px-1">Resume Tracker</div>
        </div>

        {/* Login Dialog */}
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
                Sign in or create an account to manage your resumes and track job applications.
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
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Log in</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Make an account to get started.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input type="text" id="username" placeholder="Username" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Sign Up</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </nav>
    </>
  );
}

export default NavigationBar;
