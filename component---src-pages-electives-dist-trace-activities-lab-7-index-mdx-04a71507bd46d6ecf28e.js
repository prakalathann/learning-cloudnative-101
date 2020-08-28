(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{AqxK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),b={_frontmatter:c},p=o.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(p,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",null,"General Instructions"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Clone the git repository"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"git clone https://github.com/ibm-cloud-architecture/learning-distributed-tracing-101.git\n")))),Object(s.b)(l,{mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Important:")," You must use the ",Object(s.b)("inlineCode",{parentName:"p"},"https")," protocol for cloning the repo. If you use the ",Object(s.b)("inlineCode",{parentName:"p"},"git")," protocol, you will see a build failure in the next steps of the lab and have to clone the repository again with the ",Object(s.b)("inlineCode",{parentName:"p"},"https")," protocol.")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Change to the lab directory for ",Object(s.b)("strong",{parentName:"p"},"Open Liberty")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"cd learning-distributed-tracing-101\n")))),Object(s.b)("h2",null,"Understanding Jaeger, Service Mesh, Kiali"),Object(s.b)("p",null,"Read the OpenShift Documentation for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/ossm-jaeger.html"}),"Understanding Jaeger")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/understanding-ossm.html"}),"Understanding Service Mesh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/ossm-kiali.html"}),"Understanding Kiali"))),Object(s.b)("h2",null,"Installing Service Mesh (Istio) Operator"),Object(s.b)("p",null,"The following operators and tools are installed and configured as part of the Service Mesh installation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Jaeger operator "),Object(s.b)("li",{parentName:"ul"},"Prometheus, Grafana, and Kiali")),Object(s.b)("p",null,"With OpenShift 4, you can use the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"CodeReady Containers")," to set up a local development cluster "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_install/preparing-ossm-installation.html"}),"Preparing to install Red Hat OpenShift Service Mesh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_install/installing-ossm.html"}),"Installing Red Hat OpenShift Service Mesh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://learn.openshift.com/introduction/getting-started/"}),"Familiarize yourself with OpenShift command-line and console"))),Object(s.b)("h2",null,"Verify Service Mesh installation"),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify that istio components are installed in the namespace ",Object(s.b)("inlineCode",{parentName:"p"},"istio-system")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get pods -n istio-system\n")))),Object(s.b)("p",null,"Verify the output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"NAME                                      READY   STATUS    RESTARTS   AGE\ngrafana-57dbfb688d-8rkzm                  2/2     Running   0          61m\nistio-citadel-54f4c55c67-4djdw            1/1     Running   0          65m\nistio-egressgateway-767484c77f-zcbp5      1/1     Running   0          61m\nistio-galley-7cbcb5bd98-qzzbg             1/1     Running   0          63m\nistio-ingressgateway-6dbdc4dbdc-lzxfm     1/1     Running   0          61m\nistio-pilot-5f5c7dd5b4-nbqsd              2/2     Running   0          62m\nistio-policy-768ff8c77-qpb4j              2/2     Running   0          63m\nistio-sidecar-injector-6f5686f954-xlmdv   1/1     Running   0          61m\nistio-telemetry-64d99945dc-rn5xv          2/2     Running   0          63m\njaeger-57776787bc-nd4sg                   2/2     Running   0          63m\nkiali-549ccd69f4-v2rsv                    1/1     Running   0          56m\nprometheus-797855d5cf-wdmct               2/2     Running   0          65m\n")),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify services in the namespace ",Object(s.b)("inlineCode",{parentName:"p"},"istio-system")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get services -n istio-system\n")))),Object(s.b)("p",null,"Verify the output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                  AGE\ngrafana                     ClusterIP   172.30.28.190    <none>        3000/TCP                                 61m\nistio-citadel               ClusterIP   172.30.120.72    <none>        8060/TCP,15014/TCP                       65m\nistio-egressgateway         ClusterIP   172.30.147.31    <none>        80/TCP,443/TCP,15443/TCP                 62m\nistio-galley                ClusterIP   172.30.218.118   <none>        443/TCP,15014/TCP,9901/TCP               64m\nistio-ingressgateway        ClusterIP   172.30.35.42     <none>        15020/TCP,80/TCP,443/TCP,15443/TCP       62m\nistio-pilot                 ClusterIP   172.30.225.60    <none>        15010/TCP,15011/TCP,8080/TCP,15014/TCP   62m\nistio-policy                ClusterIP   172.30.157.199   <none>        9091/TCP,15004/TCP,15014/TCP             63m\nistio-sidecar-injector      ClusterIP   172.30.155.62    <none>        443/TCP                                  61m\nistio-telemetry             ClusterIP   172.30.118.27    <none>        9091/TCP,15004/TCP,15014/TCP,42422/TCP   63m\njaeger-agent                ClusterIP   None             <none>        5775/TCP,5778/TCP,6831/TCP,6832/TCP      64m\njaeger-collector            ClusterIP   172.30.172.121   <none>        9411/TCP,14250/TCP,14267/TCP,14268/TCP   64m\njaeger-collector-headless   ClusterIP   None             <none>        9411/TCP,14250/TCP,14267/TCP,14268/TCP   64m\njaeger-query                ClusterIP   172.30.81.233    <none>        443/TCP                                  64m\nkiali                       NodePort    172.30.129.56    <none>        20001:30998/TCP                          60m\nprometheus                  ClusterIP   172.30.153.80    <none>        9090/TCP                                 65m\nzipkin                      ClusterIP   172.30.102.53    <none>        9411/TCP                                 64m\n")),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify that the ServiceMeshMemberRoll includes the target namespace for example ",Object(s.b)("inlineCode",{parentName:"p"},"default")," as one of the ",Object(s.b)("inlineCode",{parentName:"p"},"MEMBERS")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get ServiceMeshMemberRoll -n istio-system\nNAME      MEMBERS\ndefault   [default bookinfo]\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify routes to the different UI dashboards for Jaeger, Grafana, and Kiali"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get route -n istio-system\n")))),Object(s.b)("p",null,"Verify the output, make sure ",Object(s.b)("inlineCode",{parentName:"p"},"jaeger-query")," is using ",Object(s.b)("inlineCode",{parentName:"p"},"edge")," for tls termination, if not you can use ",Object(s.b)("inlineCode",{parentName:"p"},"oc edit service jaeger-query -n istio-system")," and change it."),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"NAME                   HOST/PORT                                            PATH   SERVICES               PORT    TERMINATION   WILDCARD\ngrafana                grafana-istio-system.apps-crc.testing                       grafana                <all>   reencrypt     None\nistio-ingressgateway   istio-ingressgateway-istio-system.apps-crc.testing          istio-ingressgateway   8080                  None\njaeger                 jaeger-istio-system.apps-crc.testing                        jaeger-query           <all>   edge          None\nkiali                  kiali-istio-system.apps-crc.testing                         kiali                  <all>   reencrypt     None\nprometheus             prometheus-istio-system.apps-crc.testing                    prometheus             <all>   reencrypt     None\n")),Object(s.b)("p",null,"Open the different UIs in the browser using the route’s values for HOST/PORT"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Jaeger: ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://jaeger-istio-system.apps-crc.testing"}),"https://jaeger-istio-system.apps-crc.testing")),Object(s.b)("li",{parentName:"ul"},"Grafana: ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://grafana-istio-system.apps-crc.testing"}),"https://grafana-istio-system.apps-crc.testing")),Object(s.b)("li",{parentName:"ul"},"Kiali: ",Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"https://kiali-istio-system.apps-crc.testing"}),"https://kiali-istio-system.apps-crc.testing"))),Object(s.b)("h2",null,"Build the Applications"),Object(s.b)("p",null,"The next step is to build the applications inside OpenShift so that they become available in the OpenShift registry for the deployment in the next section:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'# still using the "learning-distributed-tracing-101" directory\noc new-build . --strategy=docker --context-dir=lab-jaeger-istio-ol/service-a --name service-a-openliberty-istio\n')),Object(s.b)("p",null,"You can follow the build progress through the OpenShift console from the “Developer” perspective, then clicking on “Builds” and selecting the corresponding build name (",Object(s.b)("inlineCode",{parentName:"p"},"service-a"),"), then selecting the ",Object(s.b)("inlineCode",{parentName:"p"},"Logs")," tab."),Object(s.b)("p",null,"You can also follow the build progress via command-line, with this command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc logs -f bc/service-a-openliberty-istio\n")),Object(s.b)("p",null,"You should see the following message upon build completion:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"...\nWriting manifest to image destination\nStoring signatures\nSuccessfully pushed image-registry.openshift-image-registry.svc:5000/default/service-a-openliberty-istio@sha256:14dc4b440e94066818d1ac9d4b06132d61c61a347c5230971159e059c9adf5de\nPush successful\n")),Object(s.b)(l,{mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Important"),": If you accidentally cloned the Git repository using the ",Object(s.b)("inlineCode",{parentName:"p"},"git")," protocol, you will see error messages in the build log that are similar to these:")),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'Cloning "git@github.com:ibm-cloud-architecture/learning-distributed-tracing-101.git" ...\nerror: Host key verification failed.\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n')),Object(s.b)("p",null,"To recover from that error condition, delete the local clone and clone the repository again using the ",Object(s.b)("inlineCode",{parentName:"p"},"https")," protocol. Once the clone is complete, delete the build configuration objects created by the ",Object(s.b)("inlineCode",{parentName:"p"},"oc new-build")," command by entering the ",Object(s.b)("inlineCode",{parentName:"p"},"oc delete")," commands below and then repeat the ",Object(s.b)("inlineCode",{parentName:"p"},"oc new-build")," step:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"oc delete buildconfig service-a-openliberty-istio -n default\noc delete imagestream open-liberty -n default\n")),Object(s.b)("p",null,"Note that you can safely ignore these warning messages in the build log:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'time="2020-03-18T19:15:00Z" level=warning msg="pkg/chroot: error unmounting \\"/tmp/buildah888423814/mnt/rootfs\\": error checking if \\"/tmp/buildah888423814/mnt/rootfs/sys/fs/cgroup/cpuset\\" is mounted: no such file or directory"\n')),Object(s.b)("p",null,"Now build ",Object(s.b)("inlineCode",{parentName:"p"},"service-b"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'# still using the "learning-distributed-tracing-101" directory\noc new-build . --strategy=docker --context-dir=lab-jaeger-istio-ol/service-b --name service-b-openliberty-istio\n')),Object(s.b)("p",null,"Once again, you can follow the build progress via OpenShift console or observing the build logs with the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc logs -f bc/service-b-openliberty-istio\n")),Object(s.b)("p",null,"After both builds are completed, proceed to deploy the application."),Object(s.b)("h2",null,"Deploy the Applications"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Deploy the services ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," and ",Object(s.b)("inlineCode",{parentName:"li"},"service-b"))),Object(s.b)("p",null,"Use the file ",Object(s.b)("inlineCode",{parentName:"p"},"istio-openliberty.yaml")," for Java"),Object(s.b)("p",null,"Here is an example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"cd lab-jaeger-istio-ol\noc apply -f istio-openliberty.yaml -n default\n")),Object(s.b)("p",null,"Let’s look at the file content on how the services are defined to be deployed into OpenShift cluster:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\nspec:\n  ports:\n    - port: 9080\n      name: http\n  selector:\n    app: service-a\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-a\n  template:\n    metadata:\n      labels:\n        app: service-a\n        version: v1\n      annotations:\n        sidecar.istio.io/inject: "true"\n    spec:\n      containers:\n        - name: app\n          image: image-registry.openshift-image-registry.svc:5000/default/service-a-openliberty-istio\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://jaeger-collector.istio-system.svc:14268/api/traces\n            - name: JAEGER_PROPAGATION\n              value: b3\n            - name: SERVICE_FORMATTER\n              value: service-b\n            - name: JAEGER_REPORTER_LOG_SPANS\n              value: "true"\n            - name: JAEGER_SAMPLER_TYPE\n              value: const\n            - name: JAEGER_SAMPLER_PARAM\n              value: "1"\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 9080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\nspec:\n  ports:\n    - port: 9081\n      name: http\n  selector:\n    app: service-b\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-b\n  template:\n    metadata:\n      labels:\n        app: service-b\n        version: v1\n      annotations:\n        sidecar.istio.io/inject: "true"\n    spec:\n      containers:\n        - name: app\n          image: image-registry.openshift-image-registry.svc:5000/default/service-b-openliberty-istio\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://jaeger-collector.istio-system.svc:14268/api/traces\n            - name: JAEGER_PROPAGATION\n              value: b3\n            - name: JAEGER_REPORTER_LOG_SPANS\n              value: "true"\n            - name: JAEGER_SAMPLER_TYPE\n              value: const\n            - name: JAEGER_SAMPLER_PARAM\n              value: "1"\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 9081\n')),Object(s.b)("p",null,"In the YAML deployment manifest there are few items to point out:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Ports")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The port for the container is specified in the service and the container in the deployment, for example, ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," with port ",Object(s.b)("inlineCode",{parentName:"li"},"9080")," and ",Object(s.b)("inlineCode",{parentName:"li"},"service-b")," with port ",Object(s.b)("inlineCode",{parentName:"li"},"9081"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Environment Variables")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"JAEGER_ENDPOINT")," is specified to indicate to the Jaeger client library to send the traces using http to the jaeger collector service ",Object(s.b)("inlineCode",{parentName:"p"},"http://jaeger-collector.istio-system.svc:14268/api/traces")," that is deployed on the namespace ",Object(s.b)("inlineCode",{parentName:"p"},"istio-system"),". ")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"SERVICE_FORMATTER")," used by ",Object(s.b)("inlineCode",{parentName:"p"},"service-a")," to indicate the hostname of ",Object(s.b)("inlineCode",{parentName:"p"},"service-b")," that will use to format the hello message.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"JAEGER_PROPAGATION")," is set to ",Object(s.b)("inlineCode",{parentName:"p"},"b3")," this is necessary because the Envoy proxy does not recognize Jaeger’s default on-the-wire representation of the trace context, but it does recognize Zipkin’s B3 headers. This configuration instructs the Jaeger tracer to use B3 headers instead of its default ones.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"JAEGER_REPORTER_LOG_SPANS")," is set to “true”. It instructs the Jaeger reporter to log finished span IDs. The reporter may need to be given a Logger for this option to take effect.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"JAEGER_SAMPLER_TYPE")," is set to ",Object(s.b)("inlineCode",{parentName:"p"},"const"),", which indicates the constant sampling pattern, as defined ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.jaegertracing.io/docs/1.17/client-libraries/#sampling"}),"here"),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The variable ",Object(s.b)("inlineCode",{parentName:"p"},"JAEGER_SAMPLER_PARAM")," is set to 1, which in combination with the constant sampling pattern, means 100% of the spans will be reported to the Jaeger backend.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Istio has certain ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://istio.io/docs/setup/additional-setup/requirements/"}),"specific requirements"),". The ones we used in our  ",Object(s.b)("inlineCode",{parentName:"p"},"YAML")," manifest are the following: **"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Named service ports"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"The service port name starts with ",Object(s.b)("inlineCode",{parentName:"li"},"http")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Deployment with app and version labels"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"The Pod template should have the following labels defined ",Object(s.b)("inlineCode",{parentName:"li"},"app")," and ",Object(s.b)("inlineCode",{parentName:"li"},"version"))))))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The ",Object(s.b)("inlineCode",{parentName:"p"},"pom.xml")," for each service contains the Jaeger client dependency, which can also handle the headers generated by the Istio Envoy proxy forwards, thus allowing for end to end propagation. The source code is available in their respective directories ",Object(s.b)("inlineCode",{parentName:"p"},"service-a")," and ",Object(s.b)("inlineCode",{parentName:"p"},"service-b"),", the dependency related to OpenTracing in the file ",Object(s.b)("inlineCode",{parentName:"p"},"pom.xml")," for the service looks like this:"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"<dependency>\n    <groupId>io.jaegertracing</groupId>\n    <artifactId>jaeger-client</artifactId>\n    <version>0.34.0</version>\n</dependency>\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Deploy the Istio Gateway and VirtualService"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc apply -f gateway.yaml -n default\n")))),Object(s.b)("p",null,"Here is the content of ",Object(s.b)("inlineCode",{parentName:"p"},"gateway.yaml")),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),'apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: distributing-tracing-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n    - port:\n        number: 80\n        name: http\n        protocol: HTTP\n      hosts:\n        - "*"\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: distributing-tracing\nspec:\n  hosts:\n    - "*"\n  gateways:\n    - distributing-tracing-gateway\n  http:\n    - match:\n        - uri:\n            prefix: /sayHello\n      route:\n        - destination:\n            host: service-a\n            port:\n              number: 9080\n')),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Verify services are deployed and running:")),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get all -l app=service-a -n default\noc get all -l app=service-b -n default\nNAME                             READY   STATUS    RESTARTS   AGE\npod/service-a-799d4dc5f8-v7l74   2/2     Running   0          19m\npod/service-b-5c45ff88d-dr7cl   2/2     Running   0          23m\n\nNAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/service-a   ClusterIP   172.30.243.210   <none>        9080/TCP   19m\nservice/service-b   ClusterIP   172.30.40.248   <none>        9081/TCP   23m\n\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/service-a   1/1     1            1           19m\ndeployment.apps/service-b   1/1     1            1           23m\n\nNAME                                   DESIRED   CURRENT   READY   AGE\nreplicaset.apps/service-a-799d4dc5f8   1         1         1       19m\nreplicaset.apps/service-b-5c45ff88d   1         1         1       23m\n")),Object(s.b)("p",null,"Notice that under the ",Object(s.b)("inlineCode",{parentName:"p"},"READY")," column for pods, it shows that there are two (2/2) containers running, one of them is the istio sidecar proxy."),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},"Get the hostname for the Istio ingress gateway")),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"oc get route -n istio-system istio-ingressgateway \nNAME                   HOST/PORT                                            PATH   SERVICES               PORT   TERMINATION   WILDCARD\nistio-ingressgateway   istio-ingressgateway-istio-system.apps-crc.testing          istio-ingressgateway   8080                 None\n")),Object(s.b)("p",null,". Use curl or open a browser with the endpoint URL using the HOST/PORT of the route"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"curl http://istio-ingressgateway-istio-system.apps-crc.testing/sayHello/Carlos\n")),Object(s.b)("p",null,"Notice in the output that the message was formatted by service-b"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{}),"Hello, from service-b Carlos!\n")),Object(s.b)("p",null,"From the result, you can see that ",Object(s.b)("inlineCode",{parentName:"p"},"service-a")," calls ",Object(s.b)("inlineCode",{parentName:"p"},"service-b")," and replies back."),Object(s.b)("ol",{start:6},Object(s.b)("li",{parentName:"ol"},"In the Jaeger UI select ",Object(s.b)("inlineCode",{parentName:"li"},"istio-ingressgateway")," or ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," and click ",Object(s.b)("strong",{parentName:"li"},"Find Traces"))),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABvElEQVQoz6VSa2/bMAz0//9p/dQE2FJkaVw3cfyUZNnyK3Z3PTJ1sQH7NgMHivLxdKQUDcsCPwxw1qJpGvxm/j9fZCiUFwVCCJimCQPFe2KYZ8wUn4j7supa9tZ1Zb5o/i9EbduqMxEax1GxfnzA9gMCBTwPkQ4kX7g/3+9wzANjQ27TP9btNCMQkff+252ISbR0LSNYSFzEKffujBP/y8ETIXuSy3pgfd91yolETFxK7PseI4nvZYHT9YKEo4izTJEUJSwFLP8bitTkbqhYW1LQ8X8k7YrLmeqbw0tZYfd6xsvbG34RxzjWeEoSxZUHFc6iYq2C9YVzKImoo7IIbvOTNtTtOME5g4LFjTVsycPbGp5FfdsgdK1ytXWiZpeOdTpDmdl2KUKoXYM4zZDebrgRGZHnzNMrkcLUtY5JzCgoZOm0oZbOUER1fl8uuy4gyJzoKM9zWFOjoytnKrp2CN6R05I7qQGZe6UO+8ezEcE/b9nwtPONl3FNHw55KdK6RHFrjPnLoZhym8Px6ymIw81lcrkgsOBHVeNpt8fr8YDk/BOH5yfsd89I4wPOpyMC+fK0PN/iPsvxbh0+Ac3VSh6MFdSVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-trace",title:"istio-trace",src:"/static/bc015662ff33a4395aac23db0bffdfc5/3cbba/istio-ol-jaeger-traces.png",srcSet:["/static/bc015662ff33a4395aac23db0bffdfc5/7fc1e/istio-ol-jaeger-traces.png 288w","/static/bc015662ff33a4395aac23db0bffdfc5/a5df1/istio-ol-jaeger-traces.png 576w","/static/bc015662ff33a4395aac23db0bffdfc5/3cbba/istio-ol-jaeger-traces.png 1152w","/static/bc015662ff33a4395aac23db0bffdfc5/4c487/istio-ol-jaeger-traces.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"You can see 7 Spans in a single trace starting from the ",Object(s.b)("inlineCode",{parentName:"p"},"istio-ingressgateway")," ending in ",Object(s.b)("inlineCode",{parentName:"p"},"service-b.default")),Object(s.b)("ol",{start:7},Object(s.b)("li",{parentName:"ol"},"Click on one of the traces and expand the spans in the trace")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACBElEQVQoz22S627bMAxG/f4v1hVtsfWytY3TxHZ8lyxbvqexc0Y7QX4ME3D0iaIgUiKdYZ7YRxGu72Hamu400ow943TkOJ/4Pk+cgXmdz8znb5lPq07zuOysnumKcwg80ijAFooi9VHRF7kQxzsSsdPMJ1ptl9B/w/u4Z/9+L/oD//2OwHsjSjySPCHMMpzfYciz7+MqzVYVogVbbXjyAh52Ho97n/vtjrvNF78OMR+65E9e8K4ML3HGzyDiNUp4jRNewgjntW54WrA1j1XNQ2V5lnWaxGRxhM6zlTxNUFmK0YpSWLRQOUaJXWhUmoqtcFJx7EJ5lsrIjCYrNaauMFlIGmww0Sd1tr1hU/fKhir5pIwXPihCURXjzMcWRsV5YcjX9dTneJ6H67ocDgFKgirJ5obWVNZiTImW9UJ+3XfGsZO0I+pKcRobjoMVasZxZBhG+s7SN4VgVlqr6MpQONBV0QWb0Mqr+r7HadsOLbe77pY4ySSKkegNtyFtw/l0VUFaafruGfI9Q7yhC9441fntuNMPA6NgdYyVTHvJYKj1WoBc6LuWoe/+QfpUtKkkuM5partixXbmeWaaJPJgoJNIbcbc5vjSSkFwIEmkulK9oijWv1r+yRiz/mFZVRfKct0rBGe5bDrJM1rN3MhlTc4kVFUpXA7/j8W3YO3lzFLA/X7PX0ZTPgLmufwWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-spans",title:"istio-spans",src:"/static/e85c1e96ff26d2c645202e08b845e4ce/3cbba/istio-ol-jaeger-spans.png",srcSet:["/static/e85c1e96ff26d2c645202e08b845e4ce/7fc1e/istio-ol-jaeger-spans.png 288w","/static/e85c1e96ff26d2c645202e08b845e4ce/a5df1/istio-ol-jaeger-spans.png 576w","/static/e85c1e96ff26d2c645202e08b845e4ce/3cbba/istio-ol-jaeger-spans.png 1152w","/static/e85c1e96ff26d2c645202e08b845e4ce/4c487/istio-ol-jaeger-spans.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Check one of the labs ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"./lab1"}),"Lab Jaeger - Node.js")," or ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"./lab3"}),"Lab Jaeger - Open Liberty")," for a more in-depth lab for Opentracing with Jaeger."),Object(s.b)("ol",{start:8},Object(s.b)("li",{parentName:"ol"},"In the Kiali UI select Graph to see a topology view of the services, you can enable traffic animation under Display to see the flow of http requests")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB30lEQVQoz4WS627TQBCF/SxA1TZqkiZpaVDgF28I4ikQgh8gKNAURFHJ5QWQ2iRVb2mc+Lq+ru3DzBSHSAi60tFas0ffzpy1Uam1sNVsY32rgWfPX+D4Rw/fjo4wHA6XGgwG6Pf7sq+q1+tJvfTxt9HsPEWdgPc3atj/1EWaFYiTBFmWQWuNPM/xvxWGIXzfh+d54jW2dztotZ/8Bn4WExvYGASh7HEcI01TUUKX8c5123FhLixYtgPXdckfwKjvPELjYQf31qvoHn4V4F1dlZ6ziyvSNRw/hFIKURTBqNG4tVZbgAeHX8ScZXcDec1NE1fXl/B8l+RJ9wbDeOS1yjYOurfAJL3NMMspR9p95UOFAY2qRXJGUr6CO/eg7ACxiqVmVBt7aO49xka1JUCtUwEElJHrUS5xCI/GUZSPCiJMZybmloUkThDpCB9PPuDtzzc4PvuOIi9gMIjFj1KOLBkWBRn+Hr2gOnci0dDl5zcnOJ2NcGlfyJmxWdtBpb6LB5v1fz4KG0utVOVVlUMjuwo6SaUqQBYD373fl9vniwUc+iVs217CS9gfcAHTDWB5iiIJEBEwLztkrVUaePnqNWazG5yORhiPx5hMJsvxVoG8tM4wnU6xsPg/tAXGZ78A4GX7LOwxNV8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-kiali",title:"istio-kiali",src:"/static/c3fe4cd327061a05e2605a6e77791273/3cbba/istio-ol-kiali.png",srcSet:["/static/c3fe4cd327061a05e2605a6e77791273/7fc1e/istio-ol-kiali.png 288w","/static/c3fe4cd327061a05e2605a6e77791273/a5df1/istio-ol-kiali.png 576w","/static/c3fe4cd327061a05e2605a6e77791273/3cbba/istio-ol-kiali.png 1152w","/static/c3fe4cd327061a05e2605a6e77791273/4c487/istio-ol-kiali.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("ol",{start:9},Object(s.b)("li",{parentName:"ol"},"In the Grafana UI select the Dashboard ",Object(s.b)("em",{parentName:"li"},"Istio Workload Dashboard")," or ",Object(s.b)("em",{parentName:"li"},"Istio Service Dashboard")," to see monitoring and metrics data for your services")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/0lEQVQozz1T2XabMBDlLY2dND1esM0uJEBCgMF23OZ0SU77/990OzPEfrhnpNk09w4EL99W2O4O2IR7rDah2F2cIdxHCA8x9lECZWpkhUaS5thSfLPd3e1qvcWa6m4INpstoihFkmSoawujK0TUKKamsz9HWRqKNSiKkvwp0rSQ5jHVaE2PZUrys1wheP76AqUMJWt00w/46Q25HVG4M3LycazyZwzXdyh3Qt6MMI1HXTUyQDcc4VqPprHyaPD4uEChtDRMsxK5quD7E1RZI8/L2U82ShTRrii3Euu6Cf34isI4gapaJOSXhjwy00iJBqMsq/uZ/ZpkMKSjNCeaMRWW7Ql1f0GsO0FiyCqL4OHhC0JaCovMdk/67WghbG/+NCtEnwMtiO8cD8nKmXN4SZ8Inp6eUVVWpmS9rPMzrCfas7YcM6aROJ8b22KYRqJ8RHccUFnS01mSo0SwpIat76lBi7pxMCR2RWIz+N40rTRzrhPw3dIShtMRPaGbejmPlwm1dTThcilJXUcJ/UhFHiV9CjwNa8m2rp00a9tB2LB/Ri1+frDItSwx2IdrouCFmndEpetkCVxwo3m9jPj38R1/fp7x622CbznfoHWO/Fd8/L7g7/srhp4mXCyWohUL731DyTOMnrVLCdbWOA4OA4OKVMl/TUFM9N03jiyNxn8r2jPZuIFwEgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-grafana",title:"istio-grafana",src:"/static/54aa2c59652467ac64355798befac43b/3cbba/istio-ol-grafana.png",srcSet:["/static/54aa2c59652467ac64355798befac43b/7fc1e/istio-ol-grafana.png 288w","/static/54aa2c59652467ac64355798befac43b/a5df1/istio-ol-grafana.png 576w","/static/54aa2c59652467ac64355798befac43b/3cbba/istio-ol-grafana.png 1152w","/static/54aa2c59652467ac64355798befac43b/4c487/istio-ol-grafana.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-dist-trace-activities-lab-7-index-mdx-04a71507bd46d6ecf28e.js.map