# document_storage_cli

To Run:
1. Navigate to this directory in terminal
2. enter "node cli.js"

Things I would improve if I had more time:

There would probably be weird behavior if you tried moving a filepath that has duplicate values such as
path/path/path as the move command checks for a matching name, but doesn't define any rules around depth.
It works for the test case given in the prompt though and should work as long as that edge case isn't introduced.


Things I would imporve if this was an actual application:

Testing - it wasn't a requirement and would introduce npm into the project.
I also knew the exact test case going to be ran against it. Additionally, I'm on a plane writing this
so I don't have wifi to add jest to the project.


