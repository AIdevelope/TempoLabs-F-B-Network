import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CATEGORIES = [
  {
    title: "Account & Profile",
    icon: "👤",
    faqs: [
      {
        question: "How do I create a profile?",
        answer:
          "Click the 'Sign Up' button, choose your role (Chef, Restaurant, Supplier, or Event Specialist), and follow the guided setup process.",
      },
      {
        question: "How do I edit my profile?",
        answer:
          "Go to Settings > General and update your profile information including name, bio, and professional details.",
      },
    ],
  },
  {
    title: "Jobs & Networking",
    icon: "💼",
    faqs: [
      {
        question: "How do I apply for a job?",
        answer:
          "Browse jobs in the Job Board, click on a listing to view details, then click 'Apply Now' to submit your application.",
      },
      {
        question: "How do I connect with other professionals?",
        answer:
          "Visit a user's profile and click the 'Connect' button to send a connection request.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    icon: "🔒",
    faqs: [
      {
        question: "How do I change my password?",
        answer:
          "Go to Settings > Security > Change Password and follow the prompts.",
      },
      {
        question: "How do I control my profile visibility?",
        answer:
          "Go to Settings > Privacy to adjust who can see your profile and contact information.",
      },
    ],
  },
];

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = CATEGORIES.filter((category) =>
    category.faqs.some(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CATEGORIES.map((category) => (
            <Card
              key={category.title}
              className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setSelectedCategory(category.title)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.faqs.length} articles
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ Content */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {selectedCategory || "Popular Questions"}
          </h2>
          <ScrollArea className="h-[400px] pr-4">
            <Accordion type="single" collapsible className="w-full">
              {(selectedCategory
                ? filteredCategories.find((c) => c.title === selectedCategory)
                    ?.faqs
                : filteredCategories.flatMap((c) => c.faqs)
              )?.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </Card>

        {/* Contact Support */}
        <Card className="p-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Still need help?</h2>
            <p className="text-muted-foreground">
              Our support team is here to assist you
            </p>
            <Button>Contact Support</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HelpPage;
