"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3610],{3610:function(n,r,e){e.r(r),r.default='Imports System\r\nImports System.Collections.Generic\r\n\r\nModule Module1\r\n\r\n    Sub Main()\r\n        Dim a As New M8Ball\r\n\r\n        Do While True\r\n\r\n            Dim q As String = ""\r\n            Console.Write("ask me about the future... ")\r\n            q = Console.ReadLine()\r\n\r\n            If q.Trim <> "" Then\r\n                Console.WriteLine("the answer is... {0}", a.getAnswer(q))\r\n            Else\r\n                Exit Do\r\n            End If\r\n        Loop\r\n\r\n    End Sub\r\n\r\nEnd Module\r\n\r\nClass M8Ball\r\n\r\n    Public Answers As System.Collections.Generic.Dictionary(Of Integer, String)\r\n\r\n    Public Sub New()\r\n        Answers = New System.Collections.Generic.Dictionary(Of Integer, String)\r\n        Answers.Add(0, "It is certain")\r\n        Answers.Add(1, "It is decidedly so")\r\n        Answers.Add(2, "Without a doubt")\r\n        Answers.Add(3, "Yes, definitely")\r\n        Answers.Add(4, "You may rely on ")\r\n        Answers.Add(5, "As I see it, yes")\r\n        Answers.Add(6, "Most likely")\r\n        Answers.Add(7, "Outlook good")\r\n        Answers.Add(8, "Signs point to yes")\r\n        Answers.Add(9, "Yes")\r\n        Answers.Add(10, "Reply hazy, try again")\r\n        Answers.Add(11, "Ask again later")\r\n        Answers.Add(12, "Better not tell you now")\r\n        Answers.Add(13, "Cannot predict now")\r\n        Answers.Add(14, "Concentrate and ask again")\r\n        Answers.Add(15, "Don\'t count on it")\r\n        Answers.Add(16, "My reply is no")\r\n        Answers.Add(17, "My sources say no")\r\n        Answers.Add(18, "Outlook not so")\r\n        Answers.Add(19, "Very doubtful")\r\n    End Sub\r\n\r\n    Public Function getAnswer(theQuestion As String) As String\r\n        Dim r As New Random\r\n        Return Answers(r.Next(0, 19))\r\n    End Function\r\n\r\nEnd Class\r\n'}}]);
//# sourceMappingURL=3610.52a98288.chunk.js.map