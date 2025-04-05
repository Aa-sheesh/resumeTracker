import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Profile() {
  return (
    <>
      <div className="px-5 max-w-[85vw] mx-auto gap-5 flex  my-10 h-[79vh]">
        <Card className="w-[30vw] h-[80%] text-center border-2 shadow-md">
          <Avatar className="w-24 h-24 mx-auto mt-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <CardHeader className={`font-semibold text-xl`}>
            <div>John Doe</div>
            <div className="text-gray-500/80 text-sm">john.doe@example.com</div>
          </CardHeader>

          <CardDescription>
            <div>
              <span className="font-semibold">Account created on: </span>15 Mar,
              2023
            </div>
            <Button
              variant={"outline"}
              className="mt-5 hover:bg-[rgb(13,148,136)] hover:text-white"
            >
              Edit Profile
            </Button>
          </CardDescription>
        </Card>
        <Card className="w-[65vw] h-[80%]  border-2 shadow-md">
          <CardHeader>
            <h1 className={`font-semibold text-2xl`}>Profile Details</h1>
            <CardDescription>
              Your personal details and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
                <Label htmlFor="name" className=" font-semibold mx-2 my-4">
                  Full Name
                </Label>
              <Input placeholder="John Doe" type="text" disabled="true" />
            </div>
            <div>
                <Label htmlFor="email" className=" font-semibold mx-2 my-4">
                  Email
                </Label>
              <Input placeholder="john.doe@example.com" type="email" disabled="true" />
            </div>
            <div>
                <Label htmlFor="bio" className=" font-semibold mx-2 my-4">
                  Bio
                </Label>
              <Textarea placeholder="Fullstack developer with 5+ years of experience" disabled="true" />
            </div>
            <div>
                <Label htmlFor="location" className=" font-semibold mx-2 my-4">
                  Location
                </Label>
              <Input placeholder="Mumbai, Maharashtra, IN" type="text" disabled="true" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Profile;
