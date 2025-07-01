import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  insertPublicationSchema, 
  insertCertificationSchema,
  type Publication,
  type Certification,
  type InsertPublication,
  type InsertCertification
} from "@shared/schema";

export default function ContentManager() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("publications");

  // Publications management
  const { data: publications } = useQuery<Publication[]>({
    queryKey: ["/api/publications"],
  });

  const { data: certifications } = useQuery<Certification[]>({
    queryKey: ["/api/certifications"],
  });

  const publicationForm = useForm<InsertPublication>({
    resolver: zodResolver(insertPublicationSchema),
    defaultValues: {
      title: "",
      journal: "",
      publishedDate: "",
      type: "research",
      description: "",
      contributions: [],
      impact: "",
      isVisible: true,
    },
  });

  const certificationForm = useForm<InsertCertification>({
    resolver: zodResolver(insertCertificationSchema),
    defaultValues: {
      title: "",
      issuer: "",
      completedDate: "",
      description: "",
      category: "medical",
      isVisible: true,
    },
  });

  const createPublicationMutation = useMutation({
    mutationFn: async (data: InsertPublication) => {
      const response = await apiRequest("POST", "/api/publications", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Publication created successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/publications"] });
      publicationForm.reset();
    },
    onError: (error: Error) => {
      toast({ title: "Failed to create publication", description: error.message, variant: "destructive" });
    },
  });

  const createCertificationMutation = useMutation({
    mutationFn: async (data: InsertCertification) => {
      const response = await apiRequest("POST", "/api/certifications", data);
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "Certification created successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/certifications"] });
      certificationForm.reset();
    },
    onError: (error: Error) => {
      toast({ title: "Failed to create certification", description: error.message, variant: "destructive" });
    },
  });

  const deletePublicationMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/publications/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Publication deleted successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/publications"] });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to delete publication", description: error.message, variant: "destructive" });
    },
  });

  const deleteCertificationMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/certifications/${id}`);
    },
    onSuccess: () => {
      toast({ title: "Certification deleted successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/certifications"] });
    },
    onError: (error: Error) => {
      toast({ title: "Failed to delete certification", description: error.message, variant: "destructive" });
    },
  });

  const onSubmitPublication = (data: InsertPublication) => {
    createPublicationMutation.mutate(data);
  };

  const onSubmitCertification = (data: InsertCertification) => {
    createCertificationMutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
        <p className="text-gray-600">Manage your portfolio content - add new publications, certifications, and more.</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="publications" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Publications</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Publication
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Publication</DialogTitle>
                </DialogHeader>
                <Form {...publicationForm}>
                  <form onSubmit={publicationForm.handleSubmit(onSubmitPublication)} className="space-y-4">
                    <FormField
                      control={publicationForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={publicationForm.control}
                      name="journal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Journal</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={publicationForm.control}
                        name="publishedDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Published Date</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={publicationForm.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="case_study">Case Study</SelectItem>
                                <SelectItem value="research">Research</SelectItem>
                                <SelectItem value="review">Review</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={publicationForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <Label>Contributions (one per line)</Label>
                      <Textarea 
                        name="contributionsText"
                        rows={4} 
                        placeholder="Enter each contribution on a new line"
                        onChange={(e) => {
                          const contributionsArray = e.target.value.split('\n').filter(c => c.trim());
                          publicationForm.setValue('contributions', contributionsArray);
                        }}
                      />
                    </div>
                    <FormField
                      control={publicationForm.control}
                      name="impact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Impact</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={2} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={createPublicationMutation.isPending}>
                      {createPublicationMutation.isPending ? "Creating..." : "Create Publication"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {publications?.map((publication) => (
              <Card key={publication.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{publication.title}</h3>
                      <p className="text-blue-600">{publication.journal}</p>
                      <p className="text-sm text-gray-600">{publication.publishedDate}</p>
                      <div className="mt-2">
                        <Badge variant="secondary">{publication.type}</Badge>
                        {publication.isVisible ? (
                          <Badge className="ml-2 bg-green-100 text-green-700">
                            <Eye className="w-3 h-3 mr-1" />
                            Visible
                          </Badge>
                        ) : (
                          <Badge className="ml-2 bg-gray-100 text-gray-700">
                            <EyeOff className="w-3 h-3 mr-1" />
                            Hidden
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deletePublicationMutation.mutate(publication.id)}
                        disabled={deletePublicationMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Certifications</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Certification
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Certification</DialogTitle>
                </DialogHeader>
                <Form {...certificationForm}>
                  <form onSubmit={certificationForm.handleSubmit(onSubmitCertification)} className="space-y-4">
                    <FormField
                      control={certificationForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={certificationForm.control}
                      name="issuer"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issuer</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={certificationForm.control}
                        name="completedDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Completed Date</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={certificationForm.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="medical">Medical</SelectItem>
                                <SelectItem value="research">Research</SelectItem>
                                <SelectItem value="training">Training</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={certificationForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea {...field} rows={3} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={createCertificationMutation.isPending}>
                      {createCertificationMutation.isPending ? "Creating..." : "Create Certification"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4">
            {certifications?.map((certification) => (
              <Card key={certification.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{certification.title}</h3>
                      <p className="text-blue-600">{certification.issuer}</p>
                      <p className="text-sm text-gray-600">{certification.completedDate}</p>
                      <div className="mt-2">
                        <Badge variant="secondary">{certification.category}</Badge>
                        {certification.isVisible ? (
                          <Badge className="ml-2 bg-green-100 text-green-700">
                            <Eye className="w-3 h-3 mr-1" />
                            Visible
                          </Badge>
                        ) : (
                          <Badge className="ml-2 bg-gray-100 text-gray-700">
                            <EyeOff className="w-3 h-3 mr-1" />
                            Hidden
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteCertificationMutation.mutate(certification.id)}
                        disabled={deleteCertificationMutation.isPending}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
