import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserStore } from "@/stores/userStore";
import toast from "react-hot-toast";

function Profile() {
  const { user, fetchUserProfile, updateUserProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (user) {
      setBio(user.bio || "");
      setLocation(user.location || "");
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await updateUserProfile(bio, location);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (!user) return <div className="text-center my-20">Loading profile...</div>;

  return (
    <div className="px-5 max-w-[85vw] mx-auto gap-5 flex my-10 h-[79vh]">
      <Card className="w-[30vw] text-center border-2 shadow-md">
        <Avatar className="w-24 h-24 mx-auto mt-5">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt={user.username}
          />
        </Avatar>
        <CardHeader className="font-semibold text-xl">
          <div>{user.username}</div>
          <div className="text-gray-500/80 text-sm">{user.email}</div>
        </CardHeader>

        <CardDescription>
          <div>
            <span className="font-semibold">Account created on: </span>
            {new Date(user.createdAt).toLocaleDateString()}
          </div>
          <Button
            variant="outline"
            onClick={() => setIsEditing((prev) => !prev)}
            className="mt-5 hover:bg-[rgb(13,148,136)] hover:text-white"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </CardDescription>
      </Card>

      <Card className="w-[65vw]  border-2 shadow-md">
        <CardHeader>
          <h1 className="font-semibold text-2xl">Profile Details</h1>
          <CardDescription>
            Your personal details and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="name" className="font-semibold mx-2 my-4">
              Full Name
            </Label>
            <Input placeholder={user.username} type="text" disabled />
          </div>
          <div>
            <Label htmlFor="email" className="font-semibold mx-2 my-4">
              Email
            </Label>
            <Input placeholder={user.email} type="email" disabled />
          </div>
          <div>
            <Label htmlFor="bio" className="font-semibold mx-2 my-4">
              Bio
            </Label>
            <Textarea
              placeholder="Your bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div>
            <Label htmlFor="location" className="font-semibold mx-2 my-4">
              Location
            </Label>
            <Input
              placeholder="Your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          {isEditing && (
            <Button
              onClick={handleSave}
              className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Save Changes
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
