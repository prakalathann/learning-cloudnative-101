(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{fY1m:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return O}));var a=n("wx14"),r=n("zLVn"),c=(n("q1tI"),n("7ljp")),o=n("013z"),b=(n("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},i=s("AnchorLinks"),l=s("AnchorLink"),p=s("Tabs"),m=s("Tab"),u={_frontmatter:b},d=o.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(d,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i,{small:!0,mdxType:"AnchorLinks"},Object(c.b)(l,{mdxType:"AnchorLink"},"Liveness and Readiness Probes"),Object(c.b)(l,{mdxType:"AnchorLink"},"Container Logging"),Object(c.b)(l,{mdxType:"AnchorLink"},"Monitoring Applications"),Object(c.b)(l,{mdxType:"AnchorLink"},"Activities")),Object(c.b)("h1",null,"Liveness and Readiness Probes"),Object(c.b)("p",null,"A Probe is a diagnostic performed periodically by the kubelet on a Container. To perform a diagnostic, the kubelet calls a Handler implemented by the Container. There are three types of handlers:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"ExecAction")),": Executes a specified command inside the Container. The diagnostic is considered successful if the command exits with a status code of 0."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"TCPSocketAction")),": Performs a TCP check against the Container’s IP address on a specified port. The diagnostic is considered successful if the port is open."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"HTTPGetAction")),": Performs an HTTP Get request against the Container’s IP address on a specified port and path. The diagnostic is considered successful if the response has a status code greater than or equal to 200 and less than 400."),Object(c.b)("p",null,"The kubelet can optionally perform and react to three kinds of probes on running Containers:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"livenessProbe")),": Indicates whether the Container is running. Runs for the lifetime of the Container."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"readinessProbe")),": Indicates whether the Container is ready to service requests. Only runs at start."),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/application-health.html"}),"Application Health")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cnv/cnv_logging_events_monitoring/cnv-monitoring-vm-health.html"}),"Virtual Machine Health"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes"}),"Container Probes")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"}),"Configure Probes"))),Object(c.b)("h2",null,"References"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n  - name: app\n    image: busybox\n    command: ['sh', '-c', \"echo Hello, Kubernetes! && sleep 3600\"]\n    livenessProbe:\n      exec:\n        command: ['echo','alive']\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  shareProcessNamespace: true\n  containers:\n  - name: app\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n    livenessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 10\n    readinessProbe:\n      httpGet:\n        path: /\n        port: 8080\n      periodSeconds: 10\n")),Object(c.b)("h1",null,"Container Logging"),Object(c.b)("p",null,"Application and systems logs can help you understand what is happening inside your cluster. The logs are particularly useful for debugging problems and monitoring cluster activity."),Object(c.b)("p",null,"Kubernetes provides no native storage solution for log data, but you can integrate many existing logging solutions into your Kubernetes cluster."),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/developer-cli-commands.html#logs"}),"Logs Command")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/cluster-logging.html"}),"Cluster Logging")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/logging/config/cluster-logging-collector.html"}),"Logging Collector"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"}),"Logging"))),Object(c.b)("h2",null,"References"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: counter\nspec:\n  containers:\n  - name: count\n    image: busybox\n    command: ['sh','-c','i=0; while true; do echo \"$i: $(date)\"; i=$((i+1)); sleep 5; done']\n")),Object(c.b)(p,{mdxType:"Tabs"},Object(c.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Logs ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"oc logs\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Use Stern to View Logs ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install stern\nstern . -n default\n"))),Object(c.b)(m,{label:"IKS",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Logs ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl logs\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Use Stern to View Logs ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"brew install stern\nstern . -n default\n")))),Object(c.b)("h1",null,"Monitoring Applications"),Object(c.b)("p",null,"To scale an application and provide a reliable service, you need to understand how the application behaves when it is deployed. You can examine application performance in a Kubernetes cluster by examining the containers, pods, services, and the characteristics of the overall cluster. Kubernetes provides detailed information about an application’s resource usage at each of these levels. This information allows you to evaluate your application’s performance and where bottlenecks can be removed to improve overall performance."),Object(c.b)("p",null,"Prometheus, a CNCF project, can natively monitor Kubernetes, nodes, and Prometheus itself."),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/application-health.html"}),"Monitoring Application Health")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/monitoring/monitoring-your-own-services.html"}),"Monitoring Services")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/monitoring/exposing-custom-application-metrics-for-autoscaling.html"}),"Custom Application Metrics"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/"}),"Monitoring Resource Usage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/debug-application-cluster/resource-metrics-pipeline/"}),"Resource Metrics"))),Object(c.b)("h2",null,"References"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: 500m\nspec:\n  containers:\n  - name: app\n    image: gcr.io/kubernetes-e2e-test-images/resource-consumer:1.4\n    resources:\n      requests:\n        cpu: 700m\n        memory: 128Mi\n  - name: busybox-sidecar\n    image: radial/busyboxplus:curl\n    command: [/bin/sh, -c, 'until curl localhost:8080/ConsumeCPU -d \"millicores=500&durationSec=3600\"; do sleep 5; done && sleep 3700']\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: 200m\nspec:\n  containers:\n  - name: app\n    image: gcr.io/kubernetes-e2e-test-images/resource-consumer:1.4\n    resources:\n      requests:\n        cpu: 300m\n        memory: 64Mi\n  - name: busybox-sidecar\n    image: radial/busyboxplus:curl\n    command: [/bin/sh, -c, 'until curl localhost:8080/ConsumeCPU -d \"millicores=200&durationSec=3600\"; do sleep 5; done && sleep 3700']\n")),Object(c.b)(p,{mdxType:"Tabs"},Object(c.b)(m,{label:"OpenShift",mdxType:"Tab"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"  oc get projects\n  oc api-resources -o wide\n  oc api-resources -o name\n\n  oc get nodes,ns,po,deploy,svc\n\n  oc describe node --all\n"))),Object(c.b)(m,{label:"IKS",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Verify Metrics is enabled")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get --raw /apis/metrics.k8s.io/\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Node Description ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe node\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Check Resource Useage ")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl top pods\nkubectl top nodes\n")))),Object(c.b)("h2",null,"Activities"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},Object(c.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Probes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create some Health & Startup Probes to find what’s causing an issue."),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab4"}),"Probes"))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-observability-index-mdx-ad8be9fc7fcc68a4ec25.js.map