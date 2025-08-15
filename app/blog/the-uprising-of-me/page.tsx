"use client"

import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TheUprisingOfMe() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <ScrollReveal direction="up">
          <Link href="/#blogs">
            <Button variant="ghost" className="mb-8 hover:bg-muted">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              The uprising of me
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Aug 12 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>3.5 mins read</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Siddhartha</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="outline">Coding Journey</Badge>
              <Badge variant="outline">funny</Badge>
              <Badge variant="outline">First Steps</Badge>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              If you're reading this, there's a solid chance you've also looked at code for the first time and thought:
              <br />
              <strong>"What the heck is this alien stuff?"</strong>
            </p>

            <p className="mb-6 leading-relaxed">Yeah, same here. Let me take you back.</p>

            <p className="mb-6 leading-relaxed">
              I was in Class 6, just vibing at tuition, minding my own business.
              <br />
              At the back of the room? A bunch of seniors, deep in their laptops — full hacker mode.
              <br />
              No games. No YouTube.
            </p>

            <p className="mb-6 leading-relaxed">
              Just black screens filled with:
              <br />
              <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, <code>&lt;br&gt;</code> — flying across like The
              Matrix, junior edition.
            </p>

            <p className="mb-6 leading-relaxed">
              And then one of them casually said:
              <br />
              <br />
              <em>"Do the code like this."</em>
            </p>

            <p className="mb-6 leading-relaxed">
              I had no idea what "code" even meant.
              <br />I didn't ask.
              <br />
              Not because I was shy — just curious, quietly observing.
              <br />
              Trying to figure out what on earth they were doing.
              <br />I was like:
              <br />
              <strong>"What the heck is this sorcery?!"</strong> 😵‍💫
            </p>

            <p className="mb-6 leading-relaxed">
              That evening, I went home.
              <br />
              Opened Google like a true digital warrior.
              <br />
              Typed in:
              <br />👉 <strong>"What is coding?"</strong>
            </p>

            <p className="mb-6 leading-relaxed">
              And boom.
              <br />
              Welcome to the world of HTML, CSS, and JavaScript.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Journey Begins</h2>

            <p className="mb-6 leading-relaxed">
              HTML?
              <br />
              Not bad. Kinda chill. Made me feel smart. Like, "Hey, I built something!"
            </p>

            <p className="mb-6 leading-relaxed">
              CSS?
              <br />
              Okay okay... fonts, colors, spacing. Felt like decorating a digital room.
            </p>

            <p className="mb-6 leading-relaxed">
              JavaScript?
              <br />
              BRO. Literal headache.
              <br />
              One missing semicolon and it'd just break like a toddler who missed nap time.
              <br />
              Errors everywhere. Confusion at max.
              <br />
              But still — I didn't stop.
            </p>

            <p className="mb-6 leading-relaxed">
              I built weird, ugly little websites.
              <br />
              The kind that looked like they were made in MS Paint… but to me?
              <br />
              They were masterpieces.
            </p>

            <p className="mb-6 leading-relaxed">
              No tutorials.
              <br />
              No classes.
              <br />
              No seniors helping.
              <br />
              Just me, Google, and 43 open tabs of Stack Overflow pain.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Fast Forward to Now</h2>

            <p className="mb-6 leading-relaxed">
              Now?
              <br />I know what that "hacker stuff" was.
              <br />I write real code.
              <br />
              Build real things.
              <br />
              Fix real bugs (and cause them too 😅).
            </p>

            <p className="mb-6 leading-relaxed">
              Sometimes I think back to that Class 6 version of me and laugh:
              <br />
              <strong>"Dude… you really thought this was black magic."</strong> 😂
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">If You're Just Starting Out</h2>

            <p className="mb-6 leading-relaxed">
              Let me tell you —
              <br />
              The uprising of me didn't start in a classroom.
              <br />
              It started with curiosity.
              <br />
              With confusion.
              <br />
              With browser crashes and badly formatted code.
            </p>

            <p className="mb-6 leading-relaxed">So if you're on that same path right now?</p>

            <p className="text-lg font-medium text-foreground mt-8">
              Welcome.
              <br />
              It's messy, frustrating, hilarious…
              <br />
              and 100% worth it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 pt-8 border-t border-border">
            <Link href="/#blogs">
              <Button className="w-full md:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
