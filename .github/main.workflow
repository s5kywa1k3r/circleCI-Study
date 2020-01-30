action "deploy_ssh" {
  uses = "maddox/actions/ssh@master"
  args = "whoami"
  secrets = [
    "PRIVATE_KEY",
    "HOST",
    "USER"
  ]
}
