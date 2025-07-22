"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "";
  const [subject, setSubject] = useState(query);

  useEffect(() => {
    let newUrl;
    console.log(subject);
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
      router.push(newUrl, { scroll: false });
    }
  }, [subject, router, searchParams]);

  return (
    <div className="relative ">
      <Select onValueChange={setSubject} value={subject} defaultValue={"all"}>
        <SelectTrigger className="input capitalize">
          <SelectValue placeholder="Select the subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className={"capitalize"}>
            All Subjects
          </SelectItem>
          {subjects.map((subject) => (
            <SelectItem value={subject} key={subject} className={"capitalize"}>
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default SubjectFilter;
