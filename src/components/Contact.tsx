
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground">
              Feel free to reach out if you're looking to collaborate, have a question, 
              or just want to say hello. I'm always open to discussing new projects and opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/username
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/username
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  Send me a message and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
