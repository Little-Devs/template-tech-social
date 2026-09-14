import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { cityLine } from "@/data/site";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-black border-b-2 border-primary">
          <div className="container text-center">
            <div className="text-primary mb-4 text-sm uppercase tracking-widest">
              &gt; LOCAL.CONNECT
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-glow">
              &gt; LOREM_IPSUM_DOLOR
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto uppercase tracking-wider">
              &gt; SIT_AMET // CONSECTETUR // ADIPISCING<br/>
              &gt; ELIT_SED // DO_EIUSMOD // TEMPOR
            </p>
          </div>
        </section>

        <section className="py-16 border-b-2 border-primary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card border-2 border-primary bg-card">
                <CardHeader>
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-glow">&gt; LOCAL_CHAPTERS</CardTitle>
                  <CardDescription className="uppercase tracking-wider text-xs">
                    &gt; ACTIVE_IN: {cityLine()}<br/>
                    &gt; MORE_CITIES_LAUNCHING_SOON
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card border-2 border-primary bg-card">
                <CardHeader>
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-glow">&gt; CASUAL_MEETUPS</CardTitle>
                  <CardDescription className="uppercase tracking-wider text-xs">
                    &gt; LOREM_IPSUM_DOLOR_SIT<br/>
                    &gt; AMET // CONSECTETUR // ADIPISCING
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card border-2 border-primary bg-card">
                <CardHeader>
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-glow">&gt; ALL_WELCOME</CardTitle>
                  <CardDescription className="uppercase tracking-wider text-xs">
                    &gt; ELIT_SED // DO_EIUSMOD_TEMPOR<br/>
                    &gt; INCIDIDUNT_UT_LABORE
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="shadow-card border-2 border-primary bg-card">
                <CardHeader>
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-glow">&gt; GROW_TOGETHER</CardTitle>
                  <CardDescription className="uppercase tracking-wider text-xs">
                    &gt; ET_DOLORE_MAGNA_ALIQUA<br/>
                    &gt; UT_ENIM_AD_MINIM
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="border-2 border-primary p-8 md:p-12 bg-card mb-8">
              <h2 className="text-3xl font-bold mb-6 text-primary text-glow">&gt; HOW_IT_WORKS</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-bold text-primary mb-2">&gt; STEP_01: BROWSE_EVENTS</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    LOREM_IPSUM_DOLOR_SIT_AMET
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-bold text-primary mb-2">&gt; STEP_02: SHOW_UP</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    CONSECTETUR // ADIPISCING // ELIT
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-bold text-primary mb-2">&gt; STEP_03: BE_COOL</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    SED_DO_EIUSMOD // TEMPOR_INCIDIDUNT
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-bold text-primary mb-2">&gt; STEP_04: COME_BACK</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    UT_LABORE_ET_DOLORE // MAGNA_ALIQUA
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="default" size="lg" asChild>
                  <Link to="/events">[FIND_MEETUPS]</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-primary p-6 bg-card text-center">
                <div className="text-4xl font-bold text-primary text-glow mb-2">500+</div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">&gt; ACTIVE_DISCUSSIONS</p>
              </div>
              <div className="border-2 border-primary p-6 bg-card text-center">
                <div className="text-4xl font-bold text-primary text-glow mb-2">50+</div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">&gt; MONTHLY_MEETUPS</p>
              </div>
              <div className="border-2 border-primary p-6 bg-card text-center">
                <div className="text-4xl font-bold text-primary text-glow mb-2">15+</div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">&gt; CITIES_WORLDWIDE</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
