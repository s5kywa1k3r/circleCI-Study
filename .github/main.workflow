action "Run deploy script" {
  uses = "maddox/actions/ssh@master"
  args = "whoami"
  secrets = [
    "KEY",
    "HOST",
    "USER"
  ]
}
